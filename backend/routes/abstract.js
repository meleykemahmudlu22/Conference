import express from "express";
import multer from "multer";
import path from "path";
import authMiddleware from "../middleware/auth.js";
import { supabase } from "../utils/supabase.js";

const router = express.Router();

// Memory storage to keep file buffers in memory for direct cloud upload
const storage = multer.memoryStorage();

const upload = multer({
  storage: storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit
  fileFilter: (req, file, cb) => {
    const filetypes = /pdf|docx|doc/;
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = file.mimetype === "application/pdf" || 
                     file.mimetype === "application/vnd.openxmlformats-officedocument.wordprocessingml.document" || 
                     file.mimetype === "application/msword";

    if (extname && mimetype) {
      return cb(null, true);
    } else {
      cb(new Error("Only PDF, DOC or DOCX files can be uploaded!"));
    }
  }
});

router.post("/upload", authMiddleware, (req, res) => {
  upload.single("abstract")(req, res, async (err) => {
    if (err instanceof multer.MulterError) {
      if (err.code === "LIMIT_FILE_SIZE") {
        return res.status(400).json({ message: "File size is too large! Maximum limit is 5MB." });
      }
      return res.status(400).json({ message: `Upload error: ${err.message}` });
    } else if (err) {
      return res.status(400).json({ message: err.message });
    }

    if (!req.file) return res.status(400).json({ message: "No file selected" });

    try {
      const uniqueFilename = `${Date.now()}-${req.file.originalname}`;
      const filePath = `${req.user.id}/${uniqueFilename}`;

      // 1. Upload file buffer to Supabase Storage bucket 'abstracts'
      const { data: uploadData, error: uploadErr } = await supabase.storage
        .from("abstracts")
        .upload(filePath, req.file.buffer, {
          contentType: req.file.mimetype,
          upsert: true
        });

      if (uploadErr) {
        throw new Error(`Storage upload error: ${uploadErr.message}`);
      }

      // 2. Get public URL of the uploaded file
      const { data: publicUrlData } = supabase.storage
        .from("abstracts")
        .getPublicUrl(filePath);

      const publicUrl = publicUrlData.publicUrl;

      // 3. Insert metadata record into abstracts table
      const { error: dbErr } = await supabase
        .from("abstracts")
        .insert({
          user_id: req.user.id,
          filename: uniqueFilename,
          original_name: req.file.originalname,
          path: publicUrl
        });

      if (dbErr) {
        // Clean up uploaded file if DB insert fails
        await supabase.storage.from("abstracts").remove([filePath]);
        throw new Error(`Database insert error: ${dbErr.message}`);
      }

      res.json({
        message: "Abstract successfully uploaded!",
        file: uniqueFilename,
        user: req.user.id,
        url: publicUrl
      });
    } catch (uploadErr) {
      console.error("Supabase upload/save error:", uploadErr.message);
      res.status(500).json({ message: "Could not save file details to database" });
    }
  });
});

router.get("/my-abstracts", authMiddleware, async (req, res) => {
  try {
    const { data: list, error } = await supabase
      .from("abstracts")
      .select("*")
      .eq("user_id", req.user.id)
      .order("uploaded_at", { ascending: false });

    if (error) throw error;

    // Map Supabase column names to match the frontend expectations
    const formattedList = list.map(item => ({
      id: item.id,
      userId: item.user_id,
      filename: item.filename,
      originalName: item.original_name,
      path: item.path,
      uploadedAt: item.uploaded_at
    }));

    res.json(formattedList);
  } catch (err) {
    console.error("Fetch abstracts error:", err.message);
    res.status(500).json({ message: "Could not retrieve abstracts" });
  }
});

export default router;

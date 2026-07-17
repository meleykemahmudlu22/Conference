import express from "express";
import multer from "multer";
import path from "path";
import os from "os";
import fs from "fs";
import authMiddleware from "../middleware/auth.js";
import Abstract from "../models/Abstract.js";

const router = express.Router();

// Auto-create local uploads directory if it doesn't exist
if (!process.env.VERCEL) {
  const uploadPath = path.join(import.meta.dirname, "../uploads");
  if (!fs.existsSync(uploadPath)) {
    fs.mkdirSync(uploadPath, { recursive: true });
  }
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadPath = process.env.VERCEL ? os.tmpdir() : path.join(import.meta.dirname, "../uploads");
    cb(null, uploadPath); 
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  }
});

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
      cb(new Error("Yalnız PDF, DOC və ya DOCX faylları yüklənə bilər!"));
    }
  }
});

router.post("/upload", authMiddleware, (req, res) => {
  upload.single("abstract")(req, res, async (err) => {
    if (err instanceof multer.MulterError) {
      if (err.code === "LIMIT_FILE_SIZE") {
        return res.status(400).json({ message: "Faylın ölçüsü çox böyükdür! Maksimum limit 5MB-dır." });
      }
      return res.status(400).json({ message: `Yükləmə xətası: ${err.message}` });
    } else if (err) {
      return res.status(400).json({ message: err.message });
    }

    if (!req.file) return res.status(400).json({ message: "Fayl seçilməyib" });

    try {
      const newAbstract = new Abstract({
        userId: req.user.id,
        filename: req.file.filename,
        originalName: req.file.originalname,
        path: req.file.path
      });

      await newAbstract.save();

      res.json({
        message: "Xülasə uğurla yükləndi və məlumat bazasına qeyd edildi",
        file: req.file.filename,
        user: req.user.id 
      });
    } catch (dbErr) {
      console.error("Database save error:", dbErr.message);
      res.status(500).json({ message: "Fayl məlumatı bazaya yazıla bilmədi" });
    }
  });
});

router.get("/my-abstracts", authMiddleware, async (req, res) => {
  try {
    const list = await Abstract.find({ userId: req.user.id }).sort({ uploadedAt: -1 });
    res.json(list);
  } catch (err) {
    console.error("Fetch abstracts error:", err.message);
    res.status(500).json({ message: "Xülasələri gətirmək mümkün olmadı" });
  }
});

export default router;

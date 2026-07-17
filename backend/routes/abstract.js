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

const upload = multer({ storage: storage });

router.post("/upload", authMiddleware, upload.single("abstract"), async (req, res) => {
  if (!req.file) return res.status(400).send("Fayl seçilməyib");

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
  } catch (err) {
    console.error("Database save error:", err.message);
    res.status(500).json({ message: "Fayl məlumatı bazaya yazıla bilmədi" });
  }
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

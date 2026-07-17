import express from "express";
import multer from "multer";
import path from "path";
import os from "os";
import authMiddleware from "../middleware/auth.js";

const router = express.Router();

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

router.post("/upload", authMiddleware, upload.single("abstract"), (req, res) => {
  if (!req.file) return res.status(400).send("Fayl seçilməyib");
  res.json({
    message: "Xülasə uğurla yükləndi",
    file: req.file.filename,
    user: req.user.id 
  });
});

export default router;

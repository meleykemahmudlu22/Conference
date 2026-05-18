const express = require("express");
const multer = require("multer");
const path = require("path");
const authMiddleware = require("../middleware/auth");

const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "../uploads")); 
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

module.exports = router;

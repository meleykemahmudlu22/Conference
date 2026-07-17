import express from "express";
import path from "path";
const router = express.Router();

router.get("/download", (req, res) => {
  const filePath = path.join(import.meta.dirname, "../files", "abstract-template.docx");
  res.download(filePath, "abstract-template.docx", (err) => {
    if (err) {
      res.status(500).send("Fayl yüklənmədi");
    }
  });
});

export default router;

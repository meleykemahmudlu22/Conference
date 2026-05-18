const express = require("express");
const path = require("path");
const router = express.Router();

router.get("/download", (req, res) => {
  const filePath = path.join(__dirname, "../files", "abstract-template.docx");
  res.download(filePath, "abstract-template.docx", (err) => {
    if (err) {
      res.status(500).send("Fayl yüklənmədi");
    }
  });
});

module.exports = router;

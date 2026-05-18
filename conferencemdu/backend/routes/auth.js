const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const router = express.Router();

router.post("/register", async (req, res) => {
  try {
    const { username, password } = req.body;

   
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ message: "Bu istifadəçi artıq mövcuddur" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, password: hashedPassword });
    await newUser.save();

    res.json({ message: "User yaradıldı" });
  } catch (err) {
    console.error("Register error:", err); 
    res.status(500).json({ message: "Serverdə xəta baş verdi" });
  }
});


router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user) return res.status(400).json({ message: "İstifadəçi tapılmadı" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Parol səhvdir" });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });
    res.json({ message: "Login uğurlu", token });
  } catch (err) {
    console.error("Login error:", err.message);
    res.status(500).json({ message: "Serverdə xəta baş verdi" });
  }
});

module.exports = router;

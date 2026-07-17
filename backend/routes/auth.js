import express from "express";
import jwt from "jsonwebtoken";
import { createClerkClient } from "@clerk/backend";

const router = express.Router();
const clerkClient = createClerkClient({ secretKey: process.env.CLERK_SECRET_KEY });

router.post("/register", async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({ message: "İstifadəçi adı və şifrə daxil edilməlidir" });
    }

    // Check if user already exists in Clerk by username
    const existingUsers = await clerkClient.users.getUserList({ username: [username] });
    if (existingUsers.length > 0) {
      return res.status(400).json({ message: "Bu istifadəçi artıq mövcuddur" });
    }

    // Create the user in Clerk
    await clerkClient.users.createUser({
      username,
      password,
    });

    res.json({ message: "İstifadəçi yaradıldı" });
  } catch (err) {
    console.error("Register error:", err);
    const errMsg = err.errors?.[0]?.longMessage || "Serverdə xəta baş verdi";
    res.status(400).json({ message: errMsg });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({ message: "İstifadəçi adı və şifrə daxil edilməlidir" });
    }

    // Find user in Clerk by username
    const users = await clerkClient.users.getUserList({ username: [username] });
    if (users.length === 0) {
      return res.status(400).json({ message: "İstifadəçi tapılmadı" });
    }

    const user = users[0];

    // Verify password against Clerk
    try {
      const verification = await clerkClient.users.verifyPassword({
        userId: user.id,
        password: password,
      });
      if (!verification.verified) {
        return res.status(400).json({ message: "Parol səhvdir" });
      }
    } catch (error) {
      console.error("Verify password error:", error.message);
      return res.status(400).json({ message: "Parol səhvdir" });
    }

    // Generate local JWT token for frontend auth session
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: "1h" });
    res.json({ message: "Login uğurlu", token });
  } catch (err) {
    console.error("Login error:", err.message || err);
    res.status(500).json({ message: "Serverdə xəta baş verdi" });
  }
});

export default router;

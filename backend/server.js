import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import path from "path";
import dotenv from "dotenv";
import helmet from "helmet";
import { rateLimit } from "express-rate-limit";
import { fileURLToPath } from "url";

import authRoutes from "./routes/auth.js";
import abstractRoutes from "./routes/abstract.js";
import templateRoutes from "./routes/template.js";

dotenv.config({ path: path.resolve(import.meta.dirname, ".env") });

if (!process.env.MONGO_URI) {
  console.error("FATAL ERROR: MONGO_URI is not defined in environment variables!");
  process.exit(1);
}

const app = express();

// Security middleware
app.use(helmet());
app.use(cors());
app.use(express.json());

// Rate Limiting to prevent API abuse
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, 
  limit: 100, 
  standardHeaders: "draft-7", 
  legacyHeaders: false, 
  message: { message: "Çox sayda sorğu göndərildi, zəhmət olmasa 15 dəqiqə gözləyin." }
});
app.use("/api", limiter);

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/abstract", abstractRoutes);
app.use("/api/template", templateRoutes);

// Health Check Endpoint
app.get("/api/health", (req, res) => {
  const dbStatus = mongoose.connection.readyState === 1 ? "connected" : "disconnected";
  res.json({
    status: "UP",
    database: dbStatus,
    uptime: process.uptime()
  });
});

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB qoşuldu"))
  .catch(err => console.log(err));

const isMain = process.argv[1] && (fileURLToPath(import.meta.url) === path.resolve(process.argv[1]));
if (isMain) {
  app.listen(5000, () => console.log("Server 5000 portunda işləyir"));
}

export default app;

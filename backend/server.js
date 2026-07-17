import express from "express";
import cors from "cors";
import path from "path";
import dotenv from "dotenv";
import helmet from "helmet";
import { rateLimit } from "express-rate-limit";
import { fileURLToPath } from "url";
import { supabase } from "./utils/supabase.js";

import authRoutes from "./routes/auth.js";
import abstractRoutes from "./routes/abstract.js";
import templateRoutes from "./routes/template.js";

dotenv.config({ path: path.resolve(import.meta.dirname, ".env") });

if (!process.env.SUPABASE_URL || !process.env.SUPABASE_KEY) {
  console.error("FATAL ERROR: SUPABASE_URL or SUPABASE_KEY is not defined in environment variables!");
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
  message: { message: "Too many requests, please wait 15 minutes." }
});
app.use("/api", limiter);

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/abstract", abstractRoutes);
app.use("/api/template", templateRoutes);

// Health Check Endpoint
app.get("/api/health", async (req, res) => {
  let dbStatus = "disconnected";
  try {
    const { error } = await supabase.from("abstracts").select("id").limit(1);
    if (!error) {
      dbStatus = "connected";
    }
  } catch (err) {
    console.error("Supabase connectivity check failed:", err.message);
  }
  
  res.json({
    status: "UP",
    database: dbStatus,
    uptime: process.uptime()
  });
});

const isMain = process.argv[1] && (fileURLToPath(import.meta.url) === path.resolve(process.argv[1]));
if (isMain) {
  app.listen(5000, () => console.log("Server running on port 5000"));
}

export default app;

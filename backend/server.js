import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import path from "path";
import dotenv from "dotenv";
import { fileURLToPath } from "url";

import authRoutes from "./routes/auth.js";
import abstractRoutes from "./routes/abstract.js";
import templateRoutes from "./routes/template.js";

dotenv.config({ path: path.resolve(import.meta.dirname, ".env") });

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/abstract", abstractRoutes);
app.use("/api/template", templateRoutes);

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB qoşuldu"))
  .catch(err => console.log(err));

const isMain = process.argv[1] && (fileURLToPath(import.meta.url) === path.resolve(process.argv[1]));
if (isMain) {
  app.listen(5000, () => console.log("Server 5000 portunda işləyir"));
}

export default app;

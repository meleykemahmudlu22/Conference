import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.resolve(import.meta.dirname, "../.env") });

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error("FATAL ERROR: SUPABASE_URL or SUPABASE_KEY is missing!");
}

export const supabase = createClient(supabaseUrl, supabaseKey);

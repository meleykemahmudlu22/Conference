import mongoose from "mongoose";

const AbstractSchema = new mongoose.Schema({
  userId: { 
    type: String, 
    required: true 
  },
  filename: { 
    type: String, 
    required: true 
  },
  originalName: { 
    type: String, 
    required: true 
  },
  path: { 
    type: String, 
    required: true 
  },
  uploadedAt: { 
    type: Date, 
    default: Date.now 
  }
});

export default mongoose.model("Abstract", AbstractSchema);

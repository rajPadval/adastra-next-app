import mongoose from "mongoose";

const AdminSchema = new mongoose.Schema({
  email: { type: String, unique: true },
  password: String,
});

mongoose.models = {};
export const Admin = mongoose.model("Admin", AdminSchema);

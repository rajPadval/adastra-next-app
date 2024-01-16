import mongoose from "mongoose";

const RegisterSchema = new mongoose.Schema(
  {
    fName: String,
    lName: String,
    email: { type: String, unique: true },
    phone: String,
    password: String,
  },
  { timestamps: true }
);

mongoose.models = {};
export const Register = mongoose.model("Register", RegisterSchema);

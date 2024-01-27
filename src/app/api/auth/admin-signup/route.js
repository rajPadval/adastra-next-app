import { NextResponse } from "next/server";
import { Admin } from "@/server/models/Admin";
import { connectDb } from "@/server/connection";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

connectDb();

export const POST = async (request) => {
  const { email, password } = await request.json();

  try {
    let user = await Admin.findOne({ email });

    if (user) {
      return NextResponse.json({
        success: false,
        message: "Admin already exists",
      });
    }

    const encryptedPassword = await bcrypt.hash(password, 10);

    user = await Register.create({
      fName,
      lName,
      email: email.toLowerCase(),
      phone,
      password: encryptedPassword,
    });

    await user.save();

    return NextResponse.json({
      success: true,
      message: "Signup successful",
    });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message });
  }
};

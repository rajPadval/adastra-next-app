import { NextResponse } from "next/server";
import { Register } from "@/server/models/Register";
import { connectDb } from "@/server/connection";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

connectDb();

export const POST = async (request) => {
  const { email, password } = await request.json();

  try {
    let user = await Register.findOne({ email });

    if (!user) {
      return NextResponse.json({
        success: false,
        message: "Please signup",
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return NextResponse.json({
        success: false,
        message: "Invalid credentials",
      });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    const response = NextResponse.json({
      success: true,
      message: "Login successful",
    });

    response.cookies.set("token", token, {
      httpOnly: true,
      path: "/", // cookie will only be sent to requests under '/api'
    });

    return response;
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message });
  }
};

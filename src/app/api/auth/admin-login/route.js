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

    if (!user) {
      return NextResponse.json({
        success: false,
        message: "No admin found with this email",
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return NextResponse.json({
        success: false,
        message: "Invalid credentials",
      });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_ADMIN_SECRET, {
      expiresIn: "1h",
    });

    const response = NextResponse.json({
      success: true,
      message: "Welcome Admin",
      user: "Admin",
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

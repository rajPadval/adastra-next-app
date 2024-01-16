import { NextResponse } from "next/server";
import { connectDb } from "@/server/connection";

connectDb();

export const GET = async (request) => {
  try {
    const response = NextResponse.json({
      success: true,
      message: "Logout successful",
    });

    response.cookies.set("token", "", {
      expires: new Date(0),
      httpOnly: true,
    });

    return response;
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message });
  }
};

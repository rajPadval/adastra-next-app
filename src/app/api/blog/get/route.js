import { NextResponse } from "next/server";
import { Blogpost } from "@/server/models/Blogpost";
import { connectDb } from "@/server/connection";

connectDb();

export const GET = async (request) => {
  try {
    const blogs = await Blogpost.find({}).sort({ createdAt: -1 });

    if (!blogs) {
      return NextResponse.json({ success: false, message: "No blogs to show" });
    }
    return NextResponse.json({ success: true, blogs });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message });
  }
};

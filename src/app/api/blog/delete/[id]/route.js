import { NextResponse } from "next/server";
import { Blogpost } from "@/server/models/Blogpost";
import { connectDb } from "@/server/connection";

connectDb();

export const DELETE = async (request, { params }) => {
  try {
    let blog = await Blogpost.findByIdAndDelete(params.id);

    if (!blog) {
      return NextResponse.json({ success: false, error: "Blog not found" });
    }
    return NextResponse.json({ success: true, message: "Blog deleted" });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message });
  }
};

import { NextResponse } from "next/server";
import { Blogpost } from "@/server/models/Blogpost";
import { connectDb } from "@/server/connection";

connectDb();

export const POST = async (request) => {
  const { title, content, category, creator, linkedin, thumbnail } =
    await request.json();

  try {
    let blogpost = await Blogpost.create({
      title,
      content,
      category,
      creator,
      linkedin,
      thumbnail,
    });
    await blogpost.save();

    return NextResponse.json({ success: true, message: "Blog created" });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message });
  }
};

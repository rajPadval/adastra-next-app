import { Eventpost } from "@/server/models/Eventpost";
import { NextResponse } from "next/server";
import { connectDb } from "@/server/connection";

connectDb();

export const POST = async (request) => {
  const { title, desc, url, time, date, type } = await request.json();

  try {
    let eventpost = await Eventpost.create({
      title,
      desc,
      url,
      time,
      date,
      type,
    });

    await eventpost.save();

    return NextResponse.json({ success: true, message: "Event created" });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message });
  }
};

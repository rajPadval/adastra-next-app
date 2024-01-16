import { Eventpost } from "@/server/models/Eventpost";
import { NextResponse } from "next/server";
import { connectDb } from "@/server/connection";

connectDb();

export const GET = async (request) => {
  try {
    let events = await Eventpost.find({}).sort({ createdAt: -1 });

    if (!events) {
      return NextResponse.json({
        success: false,
        message: "No events to show",
      });
    }

    return NextResponse.json({ success: true, events });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message });
  }
};

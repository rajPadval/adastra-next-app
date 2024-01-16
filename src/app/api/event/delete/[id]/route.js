import { NextResponse } from "next/server";
import { Eventpost } from "@/server/models/Eventpost";
import { connectDb } from "@/server/connection";

connectDb();

export const DELETE = async (request, { params }) => {
  try {
    let event = await Eventpost.findByIdAndDelete(params.id);

    if (!event) {
      return NextResponse.json({ success: false, error: "No event to show" });
    }
    return NextResponse.json({ success: true, message: "Event deleted" });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message });
  }
};

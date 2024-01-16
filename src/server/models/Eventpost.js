import mongoose from "mongoose";

const EventPostSchema = new mongoose.Schema(
  {
    title: String,
    desc: String,
    url: String,
    time: String,
    date: String,
    type: String,
  },
  { timestamps: true }
);

mongoose.models = {};
export const Eventpost = mongoose.model("Eventpost", EventPostSchema);

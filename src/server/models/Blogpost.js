import mongoose from "mongoose";

const BlogPostSchema = new mongoose.Schema(
  {
    title: String,
    content: String,
    category: String,
    creator: {
      type: String,
      default: "Adastra",
    },
    linkedin: String,
  },
  { timestamps: true }
);

mongoose.models = {};
export const Blogpost = mongoose.model("Blogpost", BlogPostSchema);

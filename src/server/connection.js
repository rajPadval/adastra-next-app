import mongoose from "mongoose";

const URL =
  "mongodb+srv://adastra:adastra@cluster0.93ugift.mongodb.net/adastra?retryWrites=true&w=majority";

export const connectDb = async () => {
  const connection = await mongoose.connect(URL);
  if (connection.STATES.connected) {
    console.log("Database connected");
  } else {
    console.log("Database connection failed");
  }
};

import mongoose from "mongoose";

export const connectDb = async () => {
  const connection = await mongoose.connect(process.env.MONGO_URI);
  if (connection.STATES.connected) {
    console.log("Database connected");
  } else {
    console.log("Database connection failed");
  }
};

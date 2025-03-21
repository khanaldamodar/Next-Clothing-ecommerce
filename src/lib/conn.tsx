import mongoose from "mongoose";

const dbUrl: string | undefined = process.env.DBURL;

let isConnected = false; // Keep track of connection status

export async function connectDB(): Promise<void> {
  if (isConnected) {
    console.log("Already connected to MongoDB");
    return;
  }

  if (!dbUrl) {
    console.error("Database URL is not defined in environment variables");
    return;
  }

  try {
    await mongoose.connect(dbUrl);
    isConnected = mongoose.connections[0].readyState === 1;
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}
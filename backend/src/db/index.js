import mongoose from "mongoose"
import dotenv from "dotenv"

dotenv.config({ path: ".env" })
const connectDB = async () => {
  try {
    if (!process.env.MONGODB_URI) {
      throw new Error("MONGODB_URI is not defined in the environment")
    }

    const connectionPromise = await mongoose.connect(process.env.MONGODB_URI)
    console.log("MongoDB connected successfully.")
    console.log("run on host :", connectionPromise.connection.host)
    console.log("run on port :", connectionPromise.connection.port)
    console.log("Database Name :", connectionPromise.connection.name)
  } catch (error) {
    console.error("MongoDB connection failed :", error)
    throw error
  }
}
export default connectDB

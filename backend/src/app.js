import express from "express"
import cookieParser from "cookie-parser"
import Cors from "cors"
import dotenv from "dotenv"
import appointmentRoutes from "./routes/appointment.routes.js"

dotenv.config({ path: ".env" })

const app = express()
const allowedOrigins = new Set([
  "http://localhost:3000",
  "http://localhost:3001",
  ...(process.env.CORS_ORIGIN || "")
    .split(",")
    .map((origin) => origin.trim())
    .filter(Boolean),
])

app.use(
  Cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.has(origin)) {
        return callback(null, true)
      }
      return callback(new Error("Not allowed by CORS"))
    },
    credentials: true,
  })
)

app.use(express.json({ limit: "16kb" }))
app.use(express.urlencoded({ limit: "16kb", extended: true }))
app.use(express.static("public"))
app.use(cookieParser())

// Routes
app.use("/api/appointments", appointmentRoutes)

export {app}
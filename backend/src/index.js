 // npm run dev  --->> to start nodemon server
import connectDB from "./db/index.js";
import { app } from "./app.js";
import dotenv from "dotenv";
dotenv.config({ path: ".env" })
const port = process.env.PORT || 8000

app.get("/", (req, res) => {
    res.status(200).json({
        status: "success",
        message: "Server is running fine",
    })
})

const startServer = async () => {
    try {
        await connectDB()
        app.listen(port, () => {
            console.log(`⚙️  Local Server is running at port : ${port}`);
        })
    } catch (error) {
        console.log("MONGO db connection failed !!! ", error);
        process.exit(1)
    }
}

startServer()
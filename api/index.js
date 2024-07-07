import express from "express"
import mongoose, { mongo } from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/users.js";
import videoRoutes from "./routes/video.js";
import commentRoutes from "./routes/comments.js";
import authRoutes from "./routes/auth.js";
import cookieParser from "cookie-parser";


const app = express();
dotenv.config()

const connect = () => {
    mongoose.connect(process.env.MONGO).then(() => {
        console.log("connected to mongoDB")
    }).catch((err) => {
        throw err;
    })
}

app.use(cookieParser)
app.use(express.json());
app.use("/api/users", userRoutes);
app.use("/api/video", videoRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/comments", commentRoutes);

app.use((err, req, res, next) => {
    const status = err.status || 500;
    const message = err.message || "Something went wrong";
    return res.status(status).json({
        sucess: false,
        status: status,
        message   
    })
})

app.listen(8000, () => {
    connect();
    console.log("connected")
})
import express from "express"
import mongoose, { mongo } from "mongoose";
import dotenv from "dotenv";

const app = express();
dotenv.config()

const connect = () => {
    mongoose.connect(process.env.MONGO).then(()=>{
        console.log("connected to mongoDB")        
    }).catch((err) => {
        throw err;
    })
}

app.listen(8000, ()=>{
    connect();
    console.log("connected")
})
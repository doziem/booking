import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";

import authRoute from "./routes/auth.js"
import usersRoute from "./routes/users.js"
import hotelsRoute from "./routes/hotels.js"
import roomsRoute from "./routes/rooms.js"



const app = express();
dotenv.config();

const port = process.env.PORT || 5000

const connnent =async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("DB Connected");
      } catch (error) {
       throw error
      }
}

mongoose.connection.on("disconnected", () => {
  console.log("mongoDB disconnected!");
});


// middleware
app.use(cookieParser())

app.use(express.json())

app.use("/api/v1/auth", authRoute);
app.use("/api/v1/users", usersRoute);
app.use("/api/v1/hotels", hotelsRoute);
app.use("/api/v1/rooms", roomsRoute);

app.use((err, req, res, next) => {
  const errorStatus = err.status || 5000;
  const errorMessage = err.message || "Something Went wrong";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});

app.listen(port,()=>{
    connnent()
    console.log(`App running on Port ${port}`);
})
import express from "express";
import dotenv from "dotenv";
dotenv.config();

import { dbconnect } from "./config/db.js";
import userRouter from "./routes/userRouter.js";

const app = express();
app.use(express.json());

const port = process.env.PORT;

//database is connected
dbconnect();

app.use("/api/user", userRouter)
// app.use("/api/blog", blog)

//server is running
app.listen(port, () => {
    console.log(`The server is running on the port ${port}`);
})

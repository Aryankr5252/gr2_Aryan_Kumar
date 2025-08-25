import express from "express";
import dotenv from "dotenv";
dotenv.config();

import { dbconnect } from "./config/db.js";
import userRouter from "./routes/userRouter.js";
import blogRouter from "./routes/blogRouter.js";
import fileRouter from "./routes/uploadRouter.js";

const app = express();
app.use(express.json());

const port = process.env.PORT || 3000;

//database is connected
dbconnect();

//routes
app.use("/api/user", userRouter)
app.use("/api/", blogRouter)
app.use("/api/upload", fileRouter)

app.get("/", (req, res) => {
    res.send("sb chl rha");
})

//server is running
app.listen(port, () => {
    console.log(`The server is running on the port ${port}`);
})

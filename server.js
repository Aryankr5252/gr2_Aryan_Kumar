import express from "express";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(express.json());

const port = process.env.PORT;

app.get("/", (req, res) => {
    res.send("hello");
})

//server is running
app.listen(port, () => {
    console.log(`The server is running on the port ${port}`);
})

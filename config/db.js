import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

export const dbconnect = async () => {
    try{
        await mongoose.connect(`${process.env.MONGO_URL}`);
        console.log(`Mongoose is connected.`)
    }catch(err){
        res.status(400).json({message: err.message});
    }
}
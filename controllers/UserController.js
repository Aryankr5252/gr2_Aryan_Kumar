import userModel from "../models/userModel";
import dotenv from "dotenv";
dotenv.config();
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt"

export const createController = async (req, res ) => {
    try{
        let {username, email, password} = req.body;
        let logged = userModel.findOne({email});
        if(logged) return res.json({
            message: "bhai tera id pehle se bna hua hai."
        })

        bcrypt.genSalt(10, function (err, salt) {
            // res.send(salt)
            bcrypt.hash(password, salt, async function (err, hash) {
                let userCreated = await userModel.create({
                    username,
                    email,
                    password: hash
                })
                let token = jwt.sign({ email }, `${process.env.SECRET_KEY}`);
                res.cookie("token", token);
                // await registerEmail(email,username);
                res.status(201).json({
                    success: true,
                    message: "User created Successfully",
                    data: { userCreated }
                });
            });
        });
    } catch (err) {
        res.status(400).json({
            success: false,
            message: err.message
        });
    }
}

export const loginController = async (req, res) => {
    try {
        let { email, password } = req.body;
        let user = await userModel.findOne({ email })
        if (!user) return res.send("Something went wrong");
        bcrypt.compare(password, user.password, function (err, result) {
            // res.send(result)
            let token = jwt.sign({ email }, `${process.env.SECRET_KEY}`);
            res.cookie("token", token);
            res.status(201).json({
                message: "You are logged in",
                success: true,
                data:token
            })

        });
    } catch (err) {
        res.status(400).json({
            success: false,
            message: err.message
        });
    }
}
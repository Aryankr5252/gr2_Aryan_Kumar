import blogModel from "../models/blogModel.js";
import userModel from "../models/userModel.js";


export const createblogController = async (req, res) => {
    try {
        let { title, content, imageURL } = req.body;
        let user = await userModel.findOne({ _id: req.params.id })
        let blogcreated = await blogModel.create({
            title,
            content,
            imageURL,
            authorId: user._id
        })
        res.status(201).json({
            success: true,
            message: "User created Successfully",
            data: blogcreated
        })
    } catch (err) {
        res.status(400).json({
            success: false,
            message: err.message
        });
    }
}

export const blogsController = async (req, res) => {
    try {
        let blogs = await blogModel.find({});
        res.status(201).json({
            success: true,
            data: blogs
        })
    } catch (err) {
        res.status(400).json({
            success: false,
            message: err.message
        });
    }
}

export const blogController = async (req, res) => {
    try{
        let blog = await blogModel.findById({_id: req.params.id});
        if(!blog) return res.json({
            message: "no blog yet."
        })
        res.status(201).json({
            success: true,
            data: blog
        })
    }catch (err) {
        res.status(400).json({
            success: false,
            message: err.message
        });
    }
}
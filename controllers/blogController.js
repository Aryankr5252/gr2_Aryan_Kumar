import blogModel from "../models/blogModel";
import userModel from "../models/userModel";



export const createblogController = async (req, res) => {
    try{
        let {title, content, imageURL} = req.body;
        let user = userModel.findOne({_id: req.params.id})
        let blogcreated = blogModel.create({
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
    }catch (err) {
        res.status(400).json({
            success: false,
            message: err.message
        });
    }
}
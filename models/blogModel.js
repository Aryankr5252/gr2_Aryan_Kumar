import mongoose from "mongoose"

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    content: {
        type: String,
        require: true
    },
    imageURL: Buffer,
    authorId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
    }
})

const blogModel = mongoose.model("blogs", blogSchema);

export default blogModel;
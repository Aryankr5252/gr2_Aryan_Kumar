import express from "express"
import { verifyToken } from "../middleware/verifyToken.js";
import { blogController, blogsController, createblogController } from "../controllers/blogController.js";



const router = express.Router();

router.post("/create/:id", verifyToken , createblogController);

router.get("/blogs", verifyToken, blogsController);

router.get("/blog/:id",verifyToken, blogController);

export default router;
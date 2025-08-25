import express from "express"
import { verifyToken } from "../middleware/verifyToken";
import { createblogController } from "../controllers/blogController";



const router = express.Router();

router.post("/create/:id", verifyToken , createblogController);

export default router;
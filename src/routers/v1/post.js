// here the post releted route present
// we look at the remaining url part after/post

import express from "express";
import {
  creatPost,
  deletePost,
  getAllPosts,
} from "../../controllers/postController.js";
import { s3uploader } from "../../config/multerConfig.js";

const router = express.Router(); // router object to modularsize the routes

router.post("/", s3uploader.single("image"), creatPost);

router.get("/", getAllPosts);

router.delete("/:id", deletePost);

export default router;
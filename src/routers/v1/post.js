// here the post releted route present
// we look at the remaining url part after/post

import express from "express";
import {
  creatPost,
  deletePost,
  getAllPosts,
  updatePost,
} from "../../controllers/postController.js";
import { s3uploader } from "../../config/multerConfig.js";
import { validate } from "../../velidators/zodVelidator.js";
import { zodPostSchema } from "../../velidators/zodPostSchema.js";

const router = express.Router(); // router object to modularsize the routes

router.post("/", s3uploader.single("image"),  validate(zodPostSchema),  creatPost);

router.get("/", getAllPosts);

router.delete("/:id", deletePost);

router.put("/:id", s3uploader.single('image'), updatePost)

export default router;

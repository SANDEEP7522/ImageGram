import express from "express";
import postRouter from "./post.js";
import userRouter from "./user.js";

const router = express.Router();

router.use("/posts", postRouter); // if in the post routing url i.e. after/api/v1, we have the url starting  with /post, then request is forworded to postRouter

router.use("/users", userRouter); // if in the user routing url i.e. after /api, we have the url starting  with /user/v1, then request is forworded to userRouter

export default router;

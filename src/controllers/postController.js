 import { createPostService } from "../services/postService.js";

export async function creatPost(req, res) {
  console.log(req.file);
 // call the service layer function

  const post = createPostService({
    caption: req.body.caption,
    image: req.file.location,
  });

  return res.status(201).json({
    success: true,
    message: "Post created successfully",
    data: post
});
}

// dam controller 
export async function getAllPosts(req, res) {
  return res.status(505).json({
    success: false,
    message: "not implemented"
  });
}

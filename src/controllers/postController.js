// import { createPostService } from "../services/postService";

export async function creatPost(req, res) {
  // call the service layer function

//   const post = createPostService({
//     caption: req.body.caption,
//     image: req.file.location,
//   });

  return res.json({
    success: true,
    message: "Post created successfully",
   // data: post
});
}

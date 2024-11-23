import {
  createPostService,
  getAllPostsServices,
} from "../services/postService.js";

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
    data: post,
  });
}

//  /api/v1/posts?limit=10&offset=0
export async function getAllPosts(req, res) {
  try {
    const limit = req.query.limit || 10; // in one page data
    const offset = req.query.offset || 0; // when u go other page then like un show

    // it's provid the paginated post services
    const paginatedPosts = await getAllPostsServices(offset, limit);

    // for responce
    return res.status(200).json({
      success: true,
      message: " All post fetched successfully",
      data: paginatedPosts,
    });
  } 
  catch (error) {
    console.log("Error from getAllPost", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
}

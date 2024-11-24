import {
  createPostService,
  deletePostService,
  getAllPostsServices,
  updatePostService,
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
  } catch (error) {
    console.log("Error from getAllPost", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
}

export async function deletePost(req, res) {
  try {
    const postId = req.params.id; // It allows you to access dynamic parts of the URL (you the id parameter from the route).
    const response = await deletePostService(postId);

    if (!response) {
      return res.status(404).json({
        success: false,
        message: "not found post",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Post deleted successfully",
      data: response,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
}

export async function updatePost(req, res) {
  try {
   // console.log("req file", req.file);
    const updateObject = req.body;
    if (req.file) {
      updateObject.image = req.file.location;

    }
    const response = await updatePostService(req.params.id, updateObject);
    return res.status(200).json({
      success: true, 
      message: "Post updated successfully",
      data: response
    })
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }

}
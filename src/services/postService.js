import {
  countAllPosts,
  createPost,
  deletePostById,
  findAllPost,
} from "../repositories/postRepositorie.js";

export const createPostService = async (createPostObject) => {
  const caption = createPostObject.caption?.trim();
  const image = createPostObject.image;

  const post = await createPost(caption, image);
  return post;
};

export const getAllPostsServices = async (offset, limit) => {
  const posts = await findAllPost(offset, limit);

  // calculate total number of posts and total number of pages
  const totalDocuments = await countAllPosts();

  // calculate to devide the hole meterial divid according to the limit
  const totalPages = Math.ceil(totalDocuments / limit);

  return {
    posts,
    totalPages,
    totalDocuments,
  };
};

export const deletePostService = async (id) => {
  // call the repository function
  const response = await deletePostById(id);
//   console.log("response", response);

  return response;
};

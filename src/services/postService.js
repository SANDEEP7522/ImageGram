 import { createPost } from '../repositories/postRepositorie.js'

export const createPostService = async (createPostObject) => {

     const caption = createPostObject.caption?.trim();
     const image = createPostObject.image;

     const post = await createPost(caption, image);
     return post;
}
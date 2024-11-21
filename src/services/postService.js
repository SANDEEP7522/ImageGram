 import { createPost } from '../repositories/postRepositorie.js'

export const createPostService = async (createPostObject) => {
     // Take the image of Post and Upload on aws or claudinary
     // get the url of inage frome the asw or cloudinary response
     // create a post with the caption and image in the DB using the repository
     // Return the post object 
   
     const caption = createPostObject.caption;
     const image = createPostObject.image;

     const post = await createPost(caption, image);
     return post;
}
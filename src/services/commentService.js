import { createComment, findCommentById } from "../repositories/commentRepositorie.js";
import { findPostById } from "../repositories/postRepositorie.js";

export const createCommentService = async (content, userId, onModel, commentableId) => {
    // try {
    //  if (onModel === "Post") {
    //     // comment is being made on a post and commentableId is the post id
        
    //     // 1. check if the post exists or not 
    //     const post = await findPostById(commentableId);
        
    //     if (!post) {
    //         throw {
    //             message: "Post not found",
    //             status: 400,
    //         }
    //     }
    //     // 2. after get post we need to creat comment
    //      const newComment = await createComment(content, userId, onModel, commentableId);
        
    //     // 3. add comment to post comments array
    //     post.commentableIds.push(newComment._id); // here we are adding cpmment id to post cpmment array from newComment ids
        
    //     // 4. save the post
    //     await post.save(); // saving the post cpmment form of array
       
    //     return newComment;

    // } else if (onModel === "Comment") {
    // // comment is being made on a comment and commentableId is the comment id
     
    //  // 1. check if the commnet exits or not 
    //  const ParentComment = await findCommentById(commentableId);
      
    //  // check comment is found
    //  if (!ParentComment) {
    //     throw {
    //         message: "comment not exists",
    //         status: 404
    //     }
    //  }
    //  // 2. other wiese create new comment 
    //  const newComment = await createComment(content, userId, onModel, commentableId);

    //  // 3. add comment 
    //  ParentComment.replies.push(newComment._id);

    //  // 4. Save comment
    //  await ParentComment.save();
    //  return newComment;
     
    //  }
    // } catch (error) {
    //     console.log(error);
        
    // }

    // OR

  try {
    let parent = await fetchCommentParent(onModel, commentableId);
    
    if (!parent) {
        throw {
            message: `${onModel} not found`,
            status: 404,
        }
    }

    const newComment = await createComment(content, userId, onModel, commentableId);
    
    await addChildCommentToParent(onModel, newComment, parent);
   
    return newComment;

  } catch (error) {
    console.log(error);
    
  }  
}

export const findCommentByIdService = async (id) => {
    try {
        const comment = await findCommentById(id);
        if (!comment) {
            throw {
                message: "comment not found",
                status: 404
            }
        }
        return comment;
    } catch (error) {
        console.log(error);
        
    }
}

// we creat to helper fun for createCommentService
const addChildCommentToParent = async (onModel, comment, parent) =>{
    try {
        if (onModel === "Post") {
            parent.comments.push(comment._id);
        } else if (onModel === "Comment") {
            parent.replies.push(comment._id)
        }
        await parent.save();
    } catch (error) {
        console.log(error);
        
    }
}

const fetchCommentParent = async (onModel, commentableId) => {
    try {
        let parent;
        if (onModel === "Post") {
            parent = await findPostById(commentableId);
        } else if (onModel ===  "Comment") {
            parent = await findCommentById(commentableId);
        }
        return parent;
    } catch (error) {
        console.log(error);
    }
}

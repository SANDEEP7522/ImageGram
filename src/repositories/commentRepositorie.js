// api for comment

import Comment from "../schema/comment.js"

export const createComment = async (content, userId, onModel, commentableId ) => {
try {
    const newComment = await Comment.create({ content, userId, onModel,commentableId, likes:[], replies:[] });
    return newComment;
} catch (error) {
    console.log(error);
    
}
}

export const findCommentById = async (id) => { 
 try {
    const comment = await Comment.findById(id).populate('replies');
//    console.log(comment);
    
    return comment;
 } catch (error) {
    console.log(error);
 }
}
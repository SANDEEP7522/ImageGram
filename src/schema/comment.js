import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
    minLength: 1,
  },
  userId: {
    type: mongoose.Schema.ObjectId,
    required: true,
    ref: "User",
  },
  onModlel: {
    type: String,
    requested: true,
    enum: ["Post", "Comment"],
  },
  commentableId: {
    type: mongoose.Schema.ObjectId,
    required: true,
    refPath: "onModel",
  },
  replies: [
    {
      type: mongoose.Schema.ObjectId,
      ref: "Comment",
    }
  ],
  likes:[
    {
      type: mongoose.Schema.ObjectId,
      ref: "like",
    }
  ]
}, {timestamps: true} );

const Comment = mongoose.model("Comment", commentSchema);
export default Comment;

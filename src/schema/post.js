import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
  {
    caption: {
      type: String,
      required: true,
      minLength: 5,
    },
    image: {
      type: String,
      required: true,
    },
    user: {
      type: mongoose.Schema.ObjectId,
      ref: "user",
    },
    comments: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "comment",
      },
    ],
    likes: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "like",
      },
    ],
  },
  { timestamps: true }
);

const post = mongoose.model("post", postSchema);

export default post;

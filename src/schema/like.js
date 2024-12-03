import mongoose from "mongoose";
const likeShema = new mongoose.Schema({
  onModel: {
    type: String,
    required: true,
    enum: [post, comment],
  },
  likeable: {
    type: mongoose.Schema.ObjectId,
    required: true,
    refPath: "onModel",
  },
  user:{
    type: mongoose.Schema.ObjectId,
    required: true,
    ref: "user"
  },
  
});

const Like = mongoose.model("Like", likeShema);
export default Like;

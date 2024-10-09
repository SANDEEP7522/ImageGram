// import { type } from "express/lib/response";
import { type } from "express/lib/response";
import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    
    caption: {
        type: String,
        required: true,

    },
    image: {
       type: String,
       required: true
    },
    user: {
        type: mongoose.Schema.ObjectId,
        ref: "user"
    }

}, {timestamps: true})

const post = mongoose.model("post", postSchema);

export default post;

import { type } from "express/lib/response";
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
        type: String,
        required: true,
        unique: true,
        minLength: 5,
    },
  email: {
        type: String,
        required: true,
        unique: true,
        minLength: 5,
        validate: {
        validator: function (emailValue) {
            return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.text(emailValue);
        },
        message: "Inviled your email format",
        },
    },
  password: {
        type: String,
        required: true,
        minLength: 5
    }
}, { timestamps: true } );
const user = mongoose.model("user", userSchema); // user collection

export default user;

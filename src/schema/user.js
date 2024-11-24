// import { type } from "express/lib/response";
import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      minLength: [5, 'Username must be at least 5 characters long'],
    },
    email: {
      type: String,
      required: true,
      unique: true,
      minLength: 5,
      validate: {
        validator: function (emailValue) {
          return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
            emailValue
          );
        },
        message: "Inviled your email format",
      },
    },
    password: {
      type: String,
      required: true,
      minLength: [5, 'Password must be at least 5 characters long'],
    },
  },
  { timestamps: true }
);

userSchema.pre("save", function modifyPassword(next) {
  // incoming user object
  const user = this; // object with pain password

  const SALT = bcrypt.genSaltSync(9);

  // hash password
  const hasedPassword = bcrypt.hashSync(user.password, SALT);

  // replace the plain password with hashed password
  user.password = hasedPassword;

  next();
});

const user = mongoose.model("user", userSchema); // user collection

export default user;

import mongoose from "mongoose";
import {
  createUser,
  findUserByEmail,
} from "../repositories/userRepositories.js";
import bcrypt from "bcrypt";
import { generatejwtToken } from "../utils/jwt.js";

export const signupUserService = async (user) => {
  try {
    const newUser = await createUser(user);

    return newUser;
  } catch (error) {
    // Check for MongoDB duplicate error (if email/username already exists)
    if (error.name === "MongoServerError" && error.code === 11000) {
      throw {
        status: 400,
        message: "User with the same email or username already exists",
      };
    }

    // For other errors, just throw the original error or any type of error
    throw error;
  }
};

export const signinUserService = async (userDetails) => {
  try {
    // 1. check if there is a valied registsred user with the email
    const user = await findUserByEmail(userDetails.email);
    if (!user) {
      throw {
        status: 404,
        message: "User not found",
      };
    }

    // 2. Compair the passwod
    //  await bcrypt.compare OR here take plane password and hased passwored
    const isPasswordValid = bcrypt.compareSync(
      userDetails.password,
      user.password
    );
    // check the password is not correct
    if (!isPasswordValid) {
      throw {
        status: 404,
        message: "Invalid Password!",
      };
    }
    // token generater thing
    const token = generatejwtToken({
      email: user.email,
      _id: user._id,
      username: user.username,
    });
    return token;
  } catch (error) {
   throw error;
  }
};

export const checkIfUserExists = async (email) => {
  try {
    const user = await findUserByEmail(email)
    return user; 
  } catch (error) {
    throw error
  }
}

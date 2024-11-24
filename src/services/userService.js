import mongoose from "mongoose";
import { createUser } from "../repositories/userRepositories.js";

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

import mongoose from "mongoose";

import { DB_URL } from "./severConfig.js";

export default async function connectDB() {
   // console.log("MongoDB URI:", DB_URL);
    try {
        await mongoose.connect( DB_URL );
        console.log("Connected to Mongoose");
    } catch (error) {
        console.log("Something wents wrong in your mongooseDB");
        console.log(error);
           
    }
}

import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config/severConfig.js";

export const generatejwtToken = (payload) => {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: "1d" });
};

export const verifyJWT = (token) => {
  return jwt.verify(token,  JWT_SECRET);
}
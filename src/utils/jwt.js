import jwt from "jsonwebtoken";

export const generatejwtToken = (payload) => {
  return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "1d" });
};

import { checkIfUserExists } from "../services/userService.js";
import { verifyJWT } from "../utils/jwt.js";

export const isAuthenticated = async (req, res, next) => {
  // check if jwt is passed in the headers
  const token = req.headers["x-access-token"];

  if (!token) {
    return res.status(400).json({
      success: false,
      message: "Token is Required",
    });
  }

  // Verify the token
  try {
    const response = verifyJWT(token);

    const doesUserExists = await checkIfUserExists(response.email);

    if (!doesUserExists) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    req.user = response;
    next();
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: "Invalied Token",
    });
  }
};


import { User } from "../models/user.model.js";

/** __________ AUTHENTICATION CONTROLLERS __________ */
export const register = async (req, res) => {
  const newUser = await User.create(req.body);
  return res.status(201).json({
    success: true,
    message: "User registered successfully.",
    data: newUser,
  });
};

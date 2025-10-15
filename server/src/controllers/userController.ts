import { Request, Response } from "express";

const User = require("../models/userModel");

export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await User.getAllUsers();
    res.json({ success: true, data: users });
    console.log(users);
  } catch (err) {
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

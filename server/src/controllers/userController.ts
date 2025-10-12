const User = require("../models/userModel");

exports.getUsers = async (req, res) => {
  try {
    const users = await User.getAllUsers();
    res.json({ success: true, data: users });
  } catch (err) {
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

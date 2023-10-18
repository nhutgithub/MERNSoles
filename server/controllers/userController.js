// controllers/userController.js

const User = require('../models/userModel');

// Xử lý logic liên quan đến người dùng
exports.getUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
};

exports.createUser = async (req, res) => {
  const newUser = new User(req.body);
  await newUser.save();
  res.json(newUser);
};

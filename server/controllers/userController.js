const User = require('../models/userModel');

// Lấy tất cả người dùng
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: 'Lỗi khi lấy danh sách người dùng' });
  }
};
// Lấy thông tin người dùng bằng ID
exports.getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);
    if (!user) {
      return res.status(404).json({ message: 'Người dùng không tồn tại' });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: 'Lỗi khi lấy thông tin người dùng' });
  }
};

// Cập nhật thông tin người dùng bằng ID
exports.editUser = async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.userId, req.body, { new: true });
    if (!updatedUser) {
      return res.status(404).json({ message: 'Người dùng không tồn tại' });
    }
    res.json(updatedUser);
  } catch (error) {
    res.status(500).json({ message: 'Lỗi khi cập nhật thông tin người dùng' });
  }
};

// Xóa người dùng bằng ID
exports.deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.userId);
    if (!user) {
      return res.status(404).json({ message: 'Người dùng không tồn tại' });
    }
    res.json({ message: 'Người dùng đã bị xóa' });
  } catch (error) {
    res.status(500).json({ message: 'Lỗi khi xóa người dùng' });
  }
};

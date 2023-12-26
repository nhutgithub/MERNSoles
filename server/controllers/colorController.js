const Color = require('../models/colorModel');

// Lấy tất cả màu sắc
exports.getAllColors = async (req, res) => {
  try {
    const colors = await Color.find({is_delete: 0});
    res.json(colors);
  } catch (error) {
    res.status(500).json({ message: 'Lỗi khi lấy danh sách màu sắc' });
  }
};

exports.addColor = async (req, res) => {
  try {
    const { name } = req.body;
    const existingColor = await Color.findOne({ name: name });
    if (existingColor) {
      return res.status(401).json({ message: 'Màu sắc đã tồn tại!' });
    }

    const newColor = new Color({
      color_name: name,
      is_delete: 0
    });

    await newColor.save();

    res.status(201).json({ message: 'Màu sắc đã được thêm thành công!' });
  } catch (error) {
    res.status(500).json({ error: 'Lỗi khi thêm màu sắc' });
  }
};

exports.getColorById = async (req, res) => {
  try {
    const color = await Color.findById(req.params.ColorId);
    if (!color) {
      return res.status(404).json({ message: 'Màu sắc không tồn tại' });
    }

    res.json({
      color: color,
    });
  } catch (error) {
    res.status(500).json({ message: 'Lỗi khi lấy thông tin Màu sắc' });
  }
};

exports.editColor = async (req, res) => {
  try {
    const { name } = req.body;

    const updateFields = {
      color_name: name
    };

    // Thực hiện cập nhật thông tin Màu sắc
    const updatedColor = await Color.findByIdAndUpdate(
      req.params.ColorId,
      updateFields,
      { new: true }
    );

    if (!updatedColor) {
      return res.status(404).json({ message: 'Màu sắc không tồn tại' });
    }

    res.json(updatedColor);

  } catch (error) {
    res.status(500).json({ message: 'Lỗi khi cập nhật thông tin màu sắc' });
  }
};

// Xóa Màu sắc bằng ID
exports.deleteColor = async (req, res) => {
  try {
    const ColorId = req.params.ColorId;
    const color = await Color.findByIdAndDelete(ColorId);
    if (!color) {
      return res.status(404).json({ message: 'Màu sắc không tồn tại' });
    }

    const updateFields = {
      is_delete: 1
    };

    await Color.findByIdAndUpdate(
      req.params.ColorId,
      updateFields,
      { new: true }
    );

    res.json({ message: 'Màu sắc đã bị xóa' });
  } catch (error) {
    res.status(500).json({ message: 'Lỗi khi xóa màu sắc' });
  }
};

const Size = require('../models/sizeModel');

// Lấy tất cả các size
exports.getAllSizes = async (req, res) => {
  try {
    const sizes = await Size.find({ is_delete: 0 });
    res.json(sizes);
  } catch (error) {
    res.status(500).json({ message: 'Lỗi khi lấy danh sách size' });
  }
};

exports.addSize = async (req, res) => {
  try {
    const { name } = req.body;
    const existingSize = await Size.findOne({ name: name });
    if (existingSize) {
      return res.status(401).json({ message: 'Kích thước đã tồn tại!' });
    }

    const newSize = new Size({
      size_name: name,
      is_delete: 0
    });

    await newSize.save();

    res.status(201).json({ message: 'Kích thước đã được thêm thành công!' });
  } catch (error) {
    res.status(500).json({ error: 'Lỗi khi thêm kích thước' });
  }
};

exports.getSizeById = async (req, res) => {
  try {
    const size = await Size.findById(req.params.SizeId);
    if (!size) {
      return res.status(404).json({ message: 'Kích thước không tồn tại' });
    }

    res.json({
      size: size,
    });
  } catch (error) {
    res.status(500).json({ message: 'Lỗi khi lấy thông tin Kích thước' });
  }
};

exports.editSize = async (req, res) => {
  try {
    const { name } = req.body;

    const updateFields = {
      size_name: name
    };

    // Thực hiện cập nhật thông tin Kích thước
    const updatedSize = await Size.findByIdAndUpdate(
      req.params.SizeId,
      updateFields,
      { new: true }
    );

    if (!updatedSize) {
      return res.status(404).json({ message: 'Kích thước không tồn tại' });
    }

    res.json(updatedSize);

  } catch (error) {
    res.status(500).json({ message: 'Lỗi khi cập nhật thông tin kích thước' });
  }
};

// Xóa Kích thước bằng ID
exports.deleteSize = async (req, res) => {
  try {
    const SizeId = req.params.SizeId;
    const size = await Size.findByIdAndDelete(SizeId);
    if (!size) {
      return res.status(404).json({ message: 'Kích thước không tồn tại' });
    }

    const updateFields = {
      is_delete: 1
    };

    await Size.findByIdAndUpdate(
      req.params.SizeId,
      updateFields,
      { new: true }
    );

    res.json({ message: 'Kích thước đã bị xóa' });
  } catch (error) {
    res.status(500).json({ message: 'Lỗi khi xóa kích thước' });
  }
};

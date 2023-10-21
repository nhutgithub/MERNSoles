const Image = require('../models/imageProductModel');

// Cập nhật ảnh sản phẩm theo ID
exports.editImage = async (req, res) => {
  try {
    const updatedImage = await Image.findByIdAndUpdate(req.params.imageId, req.body, { new: true });
    if (!updatedImage) {
      return res.status(404).json({ message: 'Ảnh sản phẩm không tồn tại' });
    }
    res.json(updatedImage);
  } catch (error) {
    res.status(500).json({ message: 'Lỗi khi cập nhật ảnh sản phẩm' });
  }
};

// Xóa ảnh sản phẩm theo ID
exports.deleteImage = async (req, res) => {
  try {
    const image = await Image.findByIdAndDelete(req.params.imageId);
    if (!image) {
      return res.status(404).json({ message: 'Ảnh sản phẩm không tồn tại' });
    }
    res.json({ message: 'Ảnh sản phẩm đã bị xóa' });
  } catch (error) {
    res.status(500).json({ message: 'Lỗi khi xóa ảnh sản phẩm' });
  }
};

// Lấy tất cả hình ảnh của một sản phẩm theo ID sản phẩm
exports.getImagesByProductId = async (req, res) => {
  try {
    const productId = req.params.productId;

    // Lấy tất cả hình ảnh của sản phẩm dựa trên ID sản phẩm
    const images = await Image.find({ product_id: productId });
    res.json(images);
  } catch (error) {
    res.status(500).json({ message: 'Lỗi khi lấy danh sách hình ảnh sản phẩm' });
  }
};

const ProductSizeColor = require('../models/productSizeColorModel');

// Lấy thông tin mục sản phẩm theo ID sản phẩm
exports.getProductSizeColorById = async (req, res) => {
  try {
    const product_id = req.params.product_id;

    const productSizeColor = await ProductSizeColor.find({ product_id: product_id })
      .populate({
        path: 'size_id',
        select: 'size_name',
        match: { is_delete: 0 }
      })
      .populate({
        path: 'color_id',
        select: 'color_name',
        match: { is_delete: 0 }
      });

    if (!productSizeColor) {
      return res.status(404).json({ message: 'Mục sản phẩm không tồn tại' });
    }
    res.json(productSizeColor);
  } catch (error) {
    res.status(500).json({ message: 'Lỗi khi lấy thông tin mục sản phẩm' });
  }
};

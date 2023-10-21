const ProductSizeColor = require('../models/productSizeColorModel');

// Lấy thông tin mục sản phẩm theo ID sản phẩm
exports.getProductSizeColorById = async (req, res) => {
  try {
    const product_id = req.params.product_id;

    const productSizeColor = await ProductSizeColor.find({ product_id: product_id });

    if (!productSizeColor) {
      return res.status(404).json({ message: 'Mục sản phẩm không tồn tại' });
    }
    res.json(productSizeColor);
  } catch (error) {
    res.status(500).json({ message: 'Lỗi khi lấy thông tin mục sản phẩm' });
  }
};

// Tạo mục sản phẩm mới
exports.createProductSizeColor = async (req, res) => {
  const newProductSizeColor = new ProductSizeColor(req.body);
  try {
    await newProductSizeColor.save();
    res.json(newProductSizeColor);
  } catch (error) {
    res.status(500).json({ message: 'Lỗi khi tạo mục sản phẩm' });
  }
};
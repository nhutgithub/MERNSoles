const Subcategory = require('../models/subCategoryModel');

// Lấy tất cả danh mục con theo category_id
exports.getSubcategoriesByCategory = async (req, res) => {
  try {
    const categoryId = req.params.categoryId;
    
    // Tìm tất cả danh mục con có category_id trùng khớp
    const subcategories = await Subcategory.find({ category_id: categoryId });
    
    res.json(subcategories);
  } catch (error) {
    res.status(500).json({ message: 'Lỗi khi lấy danh sách danh mục con' });
  }
};

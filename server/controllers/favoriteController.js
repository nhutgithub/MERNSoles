const Favorite = require('../models/favoriteModel');

// Lấy tất cả sản phẩm yêu thích
exports.getAllFavorites = async (req, res) => {
  try {
    const favorites = await Favorite.find({ user_id: req.params.user_id }).populate("product_id");
    res.json(favorites);
  } catch (error) {
    res.status(500).json({ message: 'Lỗi khi lấy sản phẩm yêu thích' });
  }
};

exports.addFavorite = async (req, res) => {
  try {
    const { product_id, user_id, created_at } = req.body;

    const newFavorite = new Favorite({
      product_id: product_id,
      user_id: user_id,
      created_at: created_at
    });

    await newFavorite.save();

    res.status(201).json({ message: 'Sản phẩm yêu thích đã được thêm thành công!' });
  } catch (error) {
    res.status(500).json({ error: 'Lỗi khi thêm sản phẩm yêu thích' });
  }
};

// Xóa Sản phẩm yêu thích bằng ID
exports.deleteFavorite = async (req, res) => {
  try {
    const { user_id, product_id } = req.params;
    const favorite = await Favorite.findOne({ user_id: user_id, product_id: product_id });

    if (!favorite) {
      return res.status(404).json({ message: 'Sản phẩm yêu thích không tồn tại' });
    }

    await Favorite.deleteOne({ _id: favorite._id });

    res.json({ message: 'Sản phẩm yêu thích đã bị xóa' });
  } catch (error) {
    res.status(500).json({ message: 'Lỗi khi xóa sản phẩm yêu thích' });
  }
};

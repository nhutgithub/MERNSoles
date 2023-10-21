const Product = require('../models/productModel');
const ProductSizeColor = require('../models/productSizeColorModel');
const Order = require('../models/orderModel');
const OrderItem = require('../models/orderItemModel');
const Image = require('../models/imageProductModel');

// Lấy tất cả sản phẩm
exports.getAllProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: 'Lỗi khi lấy danh sách sản phẩm' });
    }
};

// Lấy thông tin sản phẩm theo ID
exports.getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.productId);
        if (!product) {
            return res.status(404).json({ message: 'Sản phẩm không tồn tại' });
        }
        res.json(product);
    } catch (error) {
        res.status(500).json({ message: 'Lỗi khi lấy thông tin sản phẩm' });
    }
};

// Tạo sản phẩm mới
exports.createProduct = async (req, res) => {
    try {
      // Bước 1: Tạo sản phẩm mới từ req.body
      const newProduct = new Product(req.body);
  
      // Bước 2: Lưu sản phẩm mới vào cơ sở dữ liệu
      await newProduct.save();
  
      // Bước 3: Tạo các bản ghi hình ảnh mới với ID của sản phẩm mới
      const images = req.body.images; // Đây là danh sách hình ảnh truyền vào
  
      if (images && images.length > 0) {
        const newImages = images.map((imageData) => {
          return new Image({
            product_id: newProduct._id, // Sử dụng ID của sản phẩm mới
            url: imageData.url, // Thay thế "url" bằng tên trường thích hợp trong đối tượng image
          });
        });
  
        // Lưu các hình ảnh mới vào cơ sở dữ liệu
        await Image.insertMany(newImages);
      }
  
      res.json(newProduct);
    } catch (error) {
      res.status(500).json({ message: 'Lỗi khi tạo sản phẩm' });
    }
  };
  
// Cập nhật sản phẩm theo ID
exports.editProduct = async (req, res) => {
    try {
        const updatedProduct = await Product.findByIdAndUpdate(req.params.productId, req.body, { new: true });
        if (!updatedProduct) {
            return res.status(404).json({ message: 'Sản phẩm không tồn tại' });
        }
        res.json(updatedProduct);
    } catch (error) {
        res.status(500).json({ message: 'Lỗi khi cập nhật sản phẩm' });
    }
};

// Xóa sản phẩm theo ID
exports.deleteProduct = async (req, res) => {
    try {
        const productId = req.params.productId;

        // Bước 1: Lấy danh sách hình ảnh, đơn hàng và mục đơn hàng liên quan đến sản phẩm dựa trên product_id
        const orderItems = await OrderItem.find({ product_id: productId });
        const orders = await Order.find({ _id: { $in: orderItems.map(orderItem => orderItem.order_id) }});

        // Bước 2: Xóa tất cả các mục đơn hàng (order items) liên quan đến sản phẩm
        await OrderItem.deleteMany({ product_id: productId });

        // Bước 3: Xóa tất cả đơn hàng (orders) liên quan đến sản phẩm
        await Order.deleteMany({ _id: { $in: orders.map(order => order._id) }});

        // Bước 4: Xóa tất cả hình ảnh liên quan đến sản phẩm
        await Image.deleteMany({ product_id: productId });
        
        await ProductSizeColor.deleteMany({ product_id: productId });

        // Bước 5: Xóa sản phẩm
        const product = await Product.findByIdAndDelete(productId);
        if (!product) {
            return res.status(404).json({ message: 'Sản phẩm không tồn tại' });
        }

        res.json({ message: 'Sản phẩm đã bị xóa, cùng với các đơn hàng và hình ảnh liên quan' });
    } catch (error) {
        res.status(500).json({ message: 'Lỗi khi xóa sản phẩm và các liên quan' });
    }
};

// Lấy tất cả sản phẩm theo subcategory_id
exports.getProductsBySubcategory = async (req, res) => {
    try {
        const subcategoryId = req.params.subcategoryId;

        // Lấy tất cả sản phẩm của subcategory dựa trên subcategory_id
        const products = await Product.find({ subcategory_id: subcategoryId });
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: 'Lỗi khi lấy danh sách sản phẩm theo subcategory_id' });
    }
};

// Lấy tất cả sản phẩm theo category_id
exports.getProductsByCategory = async (req, res) => {
    try {
        const categoryId = req.params.categoryId;

        // Lấy tất cả subcategory_id thuộc category_id
        const subcategories = await Subcategory.find({ category_id: categoryId });
        const subcategoryIds = subcategories.map((subcategory) => subcategory.subcategory_id);

        // Lấy tất cả sản phẩm thuộc các subcategory_id đã tìm được
        const products = await Product.find({ subcategory_id: { $in: subcategoryIds } });

        res.json(products);
    } catch (error) {
        res.status(500).json({ message: 'Lỗi khi lấy danh sách sản phẩm theo category_id' });
    }
};
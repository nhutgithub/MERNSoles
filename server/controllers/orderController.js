const Order = require('../models/orderModel');
const User = require('../models/userModel');

// Lấy tất cả đơn hàng
exports.getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find();
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: 'Lỗi khi lấy danh sách đơn hàng' });
  }
};

// Lấy thông tin đơn hàng theo ID
exports.getOrderById = async (req, res) => {
  try {
    const order = await Order.findById(req.params.orderId);
    if (!order) {
      return res.status(404).json({ message: 'Đơn hàng không tồn tại' });
    }
    res.json(order);
  } catch (error) {
    res.status(500).json({ message: 'Lỗi khi lấy thông tin đơn hàng' });
  }
};

// Tạo đơn hàng mới
exports.createOrder = async (req, res) => {
  const newOrder = new Order(req.body);
  try {
    await newOrder.save();
    res.json(newOrder);
  } catch (error) {
    res.status(500).json({ message: 'Lỗi khi tạo đơn hàng' });
  }
};

// Cập nhật đơn hàng theo ID
exports.editOrder = async (req, res) => {
  try {
    const updatedOrder = await Order.findByIdAndUpdate(req.params.orderId, req.body, { new: true });
    if (!updatedOrder) {
      return res.status(404).json({ message: 'Đơn hàng không tồn tại' });
    }
    res.json(updatedOrder);
  } catch (error) {
    res.status(500).json({ message: 'Lỗi khi cập nhật đơn hàng' });
  }
};

// Xóa đơn hàng theo ID
exports.deleteOrder = async (req, res) => {
    try {
      const orderId = req.params.orderId;
  
      // Xóa đơn hàng
      const deletedOrder = await Order.findByIdAndDelete(orderId);
      if (!deletedOrder) {
        return res.status(404).json({ message: 'Đơn hàng không tồn tại' });
      }
  
      // Xóa tất cả các mục đơn hàng (order items) liên quan đến đơn hàng
      const deletedOrderItems = await OrderItem.deleteMany({ order_id: orderId });
  
      res.json({ message: 'Đơn hàng và các mục đơn hàng đã bị xóa' });
    } catch (error) {
      res.status(500).json({ message: 'Lỗi khi xóa đơn hàng và các mục đơn hàng' });
    }
  };
  
// Lấy tất cả đơn hàng của một người dùng theo ID người dùng
exports.getOrdersByUserId = async (req, res) => {
  try {
    const userId = req.params.userId;

    // Kiểm tra xem người dùng có tồn tại hay không
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'Người dùng không tồn tại' });
    }

    // Lấy tất cả đơn hàng của người dùng dựa trên ID người dùng
    const orders = await Order.find({ user_id: userId });
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: 'Lỗi khi lấy danh sách đơn hàng của người dùng' });
  }
};
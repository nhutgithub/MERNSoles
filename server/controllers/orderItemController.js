const OrderItem = require('../models/orderItemModel');
const OrderItem = require('../models/orderItemModel');

// Lấy tất cả các mục đơn hàng của một đơn hàng theo ID đơn hàng
exports.getOrderItemsByOrderId = async (req, res) => {
  try {
    const orderId = req.params.orderId;

    // Lấy tất cả các mục đơn hàng của đơn hàng dựa trên ID đơn hàng
    const orderItems = await OrderItem.find({ order_id: orderId });
    res.json(orderItems);
  } catch (error) {
    res.status(500).json({ message: 'Lỗi khi lấy danh sách mục đơn hàng của đơn hàng' });
  }
};
// Tạo mục đơn hàng mới
exports.createOrderItem = async (req, res) => {
  const newOrderItem = new OrderItem(req.body);
  try {
    await newOrderItem.save();
    res.json(newOrderItem);
  } catch (error) {
    res.status(500).json({ message: 'Lỗi khi tạo mục đơn hàng' });
  }
};

// Cập nhật mục đơn hàng theo ID
exports.editOrderItem = async (req, res) => {
  try {
    const updatedOrderItem = await OrderItem.findByIdAndUpdate(req.params.orderItemId, req.body, { new: true });
    if (!updatedOrderItem) {
      return res.status(404).json({ message: 'Mục đơn hàng không tồn tại' });
    }
    res.json(updatedOrderItem);
  } catch (error) {
    res.status(500).json({ message: 'Lỗi khi cập nhật mục đơn hàng' });
  }
};

// Xóa mục đơn hàng theo ID
exports.deleteOrderItem = async (req, res) => {
  try {
    const orderItem = await OrderItem.findByIdAndDelete(req.params.orderItemId);
    if (!orderItem) {
      return res.status(404).json({ message: 'Mục đơn hàng không tồn tại' });
    }
    res.json({ message: 'Mục đơn hàng đã bị xóa' });
  } catch (error) {
    res.status(500).json({ message: 'Lỗi khi xóa mục đơn hàng' });
  }
};

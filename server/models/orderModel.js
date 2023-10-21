const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema({
    user_id: { type: Schema.Types.ObjectId, ref: 'User' },
    phone: String,
    address: String,
    order_date: Date,
    total_price: Number,
});

const Order = mongoose.model('Order', orderSchema);
module.exports = Order;

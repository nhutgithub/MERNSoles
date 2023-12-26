const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const colorSchema = new Schema({
    color_name: String,
    is_delete: Number
});

const Color = mongoose.model('Color', colorSchema);
module.exports = Color;

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const sizeSchema = new Schema({
    size_name: String,
    is_delete: Number
});

const Size = mongoose.model('Size', sizeSchema);
module.exports = Size;

const mongoose = require("mongoose");

const roleSchema = new mongoose.Schema({
  roleName: String,
});

const Role = mongoose.model("Role", roleSchema);

module.exports = Role;

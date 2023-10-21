const mongoose = require("mongoose");
const connectDB = async () => {
  try {
    const connection = await mongoose.connect('mongodb://0.0.0.0:27017/TestDatabase', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Kết nối cơ sở dữ liệu thành công");
    return connection.connection.db;
  } catch (error) {
    console.error("Lỗi kết nối cơ sở dữ liệu:", error);
    throw error;
  }
};

module.exports = {
  async up(db) {
    const database = await connectDB();
    // Thực hiện các thay đổi lên cơ sở dữ liệu
    const rolesCollection = database.collection("roles");
    const usersCollection = database.collection("users");

    // Tạo bảng Role và chèn dữ liệu mẫu
    await rolesCollection.insertOne({
      roleName: "admin",
    });

    // Lấy ID của bảng Role để sử dụng cho User
    const adminRole = await rolesCollection.findOne({ roleName: "admin" });

    // Tạo bảng User và chèn dữ liệu mẫu với idRole là ID của Role "admin"
    await usersCollection.insertOne({
      username: "admin",
      idRole: adminRole._id,
    });
  },

  async down(db) {
    const database = await connectDB();
    // Hoàn tác các thay đổi trên cơ sở dữ liệu
    const rolesCollection = database.collection("roles");
    const usersCollection = database.collection("users");

    // Xóa bảng User và Role
    await usersCollection.deleteOne({ username: "admin" });
    await rolesCollection.deleteOne({ roleName: "admin" });
  },
};

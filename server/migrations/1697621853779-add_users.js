// migrations/20221018120000-create-roles-and-users.js

module.exports = {
  async up(db) {
    // Thực hiện các thay đổi lên cơ sở dữ liệu
    const rolesCollection = db.collection("roles");
    const usersCollection = db.collection("users");

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
    // Hoàn tác các thay đổi trên cơ sở dữ liệu
    const rolesCollection = db.collection("roles");
    const usersCollection = db.collection("users");

    // Xóa bảng User và Role
    await usersCollection.deleteOne({ username: "admin" });
    await rolesCollection.deleteOne({ roleName: "admin" });
  },
};

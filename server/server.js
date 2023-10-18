const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const routes = require('./routes/record');
const { connectDB } = require('./db/conn');

dotenv.config({ path: "./config.env" });

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Kết nối đến cơ sở dữ liệu MongoDB
connectDB()
  .then(() => {
    // Kết nối thành công, tiếp tục khởi động máy chủ
    app.listen(port, () => {
      console.log(`Server is running on port: ${port}`);
    });
  })
  .catch((error) => {
    // Kết nối thất bại, không khởi động máy chủ
    console.error("Không thể khởi động máy chủ:", error);
  });

app.use('/api', routes);

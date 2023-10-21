// routes/record.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const roleController = require('../controllers/roleController');
const categoryController = require('../controllers/categoryController');
const colorController = require('../controllers/colorController');
const imageProductController = require('../controllers/imageProductController');
const orderController = require('../controllers/orderController');
const orderItemController = require('../controllers/orderItemController');
const productController = require('../controllers/productController');
const productSizeColorController = require('../controllers/productSizeColorController');
const sizeController = require('../controllers/sizeController');
const subcategoryController = require('../controllers/subCategoryController');

// Routes for 'roles'
router.get('/roles', roleController.getRoles);

// Routes for 'users'
router.get('/users', userController.getAllUsers);
router.get('/users/:userId', userController.getUserById);
router.put('/users/:userId', userController.editUser);
router.delete('/users/:userId', userController.deleteUser);

// Routes for 'categories'
router.get('/categories', categoryController.getAllCategories);

// Routes for 'colors'
router.get('/colors', colorController.getAllColors);

// Routes for 'imageProduct'
router.post('/images', imageProductController.createImage);
router.put('/images/:imageId', imageProductController.editImage);
router.delete('/images/:imageId', imageProductController.deleteImage);
router.get('/products/:productId/images', imageProductController.getImagesByProductId);

// Routes for 'orders'
router.get('/orders', orderController.getAllOrders);
router.get('/orders/:orderId', orderController.getOrderById);
router.post('/orders', orderController.createOrder);
router.put('/orders/:orderId', orderController.editOrder);
router.delete('/orders/:orderId', orderController.deleteOrder);
router.get('/users/:userId/orders', orderController.getOrdersByUserId);

// Routes for 'orderItem'
router.get('/orders/:orderId/items', orderItemController.getOrderItemsByOrderId);
router.post('/items', orderItemController.createOrderItem);
router.put('/items/:orderItemId', orderItemController.editOrderItem);
router.delete('/items/:orderItemId', orderItemController.deleteOrderItem);

// Routes for 'product'
router.get('/products', productController.getAllProducts);
router.get('/products/:productId', productController.getProductById);
router.post('/products', productController.createProduct);
router.put('/products/:productId', productController.editProduct);
router.delete('/products/:productId', productController.deleteProduct);
router.get('/subcategories/:subcategoryId/products', productController.getProductsBySubcategory);
router.get('/categories/:categoryId/products', productController.getProductsByCategory);

// Routes for 'ProductSizeColor'
router.get('/productsizecolors/:product_id', productSizeColorController.getProductSizeColorById);
router.post('/productsizecolors', productSizeColorController.createProductSizeColor);

// Routes for 'Size'
router.get('/sizes', sizeController.getAllSizes);

// Route for getting subcategories by category_id
router.get('/subcategories/:categoryId', subcategoryController.getSubcategoriesByCategory);

module.exports = router;

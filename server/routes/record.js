// routes/record.js
const express = require('express');
const passport = require("passport");

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
const ratingController = require('../controllers/ratingController');
const revenueController = require('../controllers/revenuesController');
const favoriteController = require('../controllers/favoriteController');

const User = require('../models/userModel');
const Role = require('../models/roleModel');

// Routes for 'favorites'
router.get('/favorites/:user_id', favoriteController.getAllFavorites);
router.post('/favorites', favoriteController.addFavorite);
router.delete('/favorites/:user_id/:product_id', favoriteController.deleteFavorite);

// Routes for 'roles'
router.get('/roles', roleController.getRoles);

// Routes for 'users'
router.post('/users', userController.addUser);
router.post('/users/login', userController.login);
router.get('/users', userController.getAllUsers);
router.get('/users/:userId', userController.getUserById);
router.put('/users/:userId', userController.editUser);
router.delete('/users/:userId', userController.deleteUser);
router.get('/users/check_username/:username', userController.checkUserName);
router.put('/users/update_password/reset', userController.updatePassword);
router.post('/users/send_email', userController.sendEmail);

// Routes for 'categories'
router.get('/categories', categoryController.getAllCategories);
router.post('/categories', categoryController.addCategory);
router.get('/categories/:CategoryId', categoryController.getCategoryById);
router.put('/categories/:CategoryId', categoryController.editCategory);
router.delete('/categories/:CategoryId', categoryController.deleteCategory);

// Routes for 'colors'
router.get('/colors', colorController.getAllColors);
router.post('/colors', colorController.addColor);
router.get('/colors/:ColorId', colorController.getColorById);
router.put('/colors/:ColorId', colorController.editColor);
router.delete('/colors/:ColorId', colorController.deleteColor);

// Routes for 'imageProduct'
router.get('/products/:productId/images', imageProductController.getImagesByProductId);
router.delete('/images/:imageId', imageProductController.deleteImages);

// Routes for 'orders'
router.get('/orders/:status', orderController.getAllOrders);
router.get('/orders/:orderId', orderController.getOrderById);
router.post('/orders', orderController.createOrder);
router.put('/orders/:orderId', orderController.editOrder);
router.delete('/orders/:orderId', orderController.deleteOrder);
router.get('/users/:userId/orders', orderController.getOrdersByUserId);
router.put('/orders/:orderId/:newStatus', orderController.changeStatusOrder);

// Routes for 'orderItem'
router.get('/orders/:orderId/items', orderItemController.getOrderItemsByOrderId);

// Routes for 'product'
router.get('/products', productController.getAllProducts);
router.get('/products/:productId', productController.getProductById);
router.post('/products', productController.createProduct);
router.put('/products/:productId', productController.editProduct);
router.delete('/products/:productId', productController.deleteProduct);
router.get('/subcategories/:subcategoryName/:orderby/products', productController.getProductsBySubcategory);
router.get('/categories/:categoryName/:orderby/products', productController.getProductsByCategory);
router.get('/newest-products', productController.getNewestProducts);
router.get('/search/:keyword', productController.search);
router.get('/products/:userId/:productId', productController.checkUserHasPurchased);
router.get('/products/:userId/:productId/favorite', productController.isProductFavorite);

// Routes for 'ProductSizeColor'
router.get('/productsizecolors/:product_id', productSizeColorController.getProductSizeColorById);

// Routes for 'Size'
router.get('/sizes', sizeController.getAllSizes);
router.post('/sizes', sizeController.addSize);
router.get('/sizes/:SizeId', sizeController.getSizeById);
router.put('/sizes/:SizeId', sizeController.editSize);
router.delete('/sizes/:SizeId', sizeController.deleteSize);

// Route for getting subcategories by category_id
router.get('/subcategories', subcategoryController.getAllCategoriesWithSubcategories);
router.get('/subcategories/:categoryId', subcategoryController.getSubcategoriesByCategory);
router.post('/subcategories', subcategoryController.addSubCategory);
router.get('/subcategories/Sub/:SubCategoryId', subcategoryController.getSubCategoryById);
router.put('/subcategories/:SubCategoryId', subcategoryController.editSubCategory);
router.delete('/subcategories/:SubCategoryId', subcategoryController.deleteSubCategory);

// Routes for 'Rating'
router.post('/ratings', ratingController.addRating);
router.get('/ratings/:product_id', ratingController.getRatingByProductId);
router.get('/ratings/getByUser_Product/:userId/:productId', ratingController.getAllRating);
router.delete('/ratings/:RatingId', ratingController.deleteRating);

// Routes for 'revenues'
router.post('/revenues/get-revenue', revenueController.getRevenue);

//auth

router.get(
    '/google/callback',
    passport.authenticate('google', { session: false }),
    async (req, res) => {
        try {
            const user = req.user;
            const existingUser1 = await User.findOne({ email: user.emails[0].value }).populate('idRole');
  
            if (!existingUser1) {
                const defaultRole = await Role.findOne({ roleName: 'user' });
  
                if (defaultRole) {
                    userRole = defaultRole._id;
                }
  
                const newUser = new User({
                    firstname: user.name.givenName,
                    lastname: user.name.familyName,
                    username: user.emails[0].value,
                    password: '',
                    phone: '',
                    email: user.emails[0].value,
                    address: '',
                    idRole: userRole,
                });
  
                await newUser.save();

                res.redirect(`http://localhost:3000/auth/callback?id=${newUser._id}&firstname=${newUser.firstname}&lastname=${newUser.lastname}&email=${newUser.email}&phone=${newUser.phone}&address=${newUser.address}&role=user`);
            } else {
                res.redirect(`http://localhost:3000/auth/callback?id=${existingUser1._id}&firstname=${existingUser1.firstname}&lastname=${existingUser1.lastname}&email=${existingUser1.email}&phone=${existingUser1.phone}&address=${existingUser1.address}&role=${existingUser1.idRole.roleName}`);
            }
        } catch (error) {
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }
  );
  
module.exports = router;

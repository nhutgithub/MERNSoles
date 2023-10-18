// routes/record.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const roleController = require('../controllers/roleController');

// Routes for 'roles'
router.get('/roles', roleController.getRoles);

// Routes for 'users'
router.get('/users', userController.getUsers);
router.post('/users', userController.createUser);

module.exports = router;

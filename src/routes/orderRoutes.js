// src/routes/orderRoutes.js
const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');

// Define the GET route for orders
router.get('/orders', orderController.getOrders); 

module.exports = router;

// src/app.js
const express = require('express');
const orderRoutes = require('./routes/orderRoutes'); // Import new order routes
const app = express();

app.use(express.json()); // For parsing application/json

// Set up routes
app.use('/api', orderRoutes); // New route for orders

module.exports = app;

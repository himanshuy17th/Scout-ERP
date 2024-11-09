const express = require('express');
const router = express.Router();
const salesController = require('../controllers/salesController');

// Sales Routes
router.get('/data', salesController.getSalesData);

module.exports = router;

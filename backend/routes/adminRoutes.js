const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');

// Admin Routes
router.get('/dashboard', adminController.getAdminDashboard);

module.exports = router;

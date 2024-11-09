const express = require('express');
const router = express.Router();
const labourController = require('../controllers/labourController');

// Labour Routes
router.get('/data', labourController.getLabourData);

module.exports = router;

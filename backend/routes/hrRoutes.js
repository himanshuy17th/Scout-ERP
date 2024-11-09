const express = require('express');
const router = express.Router();
const hrController = require('../controllers/hrController');

// HR Routes
router.get('/data', hrController.getHRData);

module.exports = router;

const express = require('express');
const { exportAnnotations } = require('../controllers/exportController');
const { authenticate, authorize } = require('../middlewares/authMiddleware');

const router = express.Router();

router.get('/export', authenticate, authorize(['admin']), exportAnnotations);

module.exports = router;

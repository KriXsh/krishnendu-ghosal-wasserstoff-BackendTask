const express = require('express');
const { reviewAnnotation } = require('../controllers/reviewController');
const { authenticate, authorize } = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/review', authenticate, authorize(['admin']), reviewAnnotation);

module.exports = router;

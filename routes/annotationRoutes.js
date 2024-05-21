const express = require('express');
const { getAnnotations, getAnnotationById } = require('../controllers/annotationController');
const { authenticate, authorize } = require('../middlewares/authMiddleware');

const router = express.Router();

router.get('/', authenticate, authorize(['admin']), getAnnotations);
router.get('/:id', authenticate, authorize(['admin']), getAnnotationById);

module.exports = router;

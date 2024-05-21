const express = require('express');
const multer = require('multer');
const { uploadImage } = require('../controllers/imageController');
const { authenticate } = require('../middlewares/authMiddleware');

const router = express.Router();
const upload = multer();

router.post('/upload', authenticate, upload.single('image'), uploadImage);

module.exports = router;

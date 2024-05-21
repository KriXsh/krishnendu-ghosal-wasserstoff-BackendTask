const Image = require('../models/Image');

exports.reviewAnnotation = async (req, res) => {
  try {
    const { imageId, status } = req.body;
    const image = await Image.findById(imageId).populate('annotations');
    if (!image) {
      return res.status(404).json({ error: 'Image not found' });
    }
    image.annotations.forEach(annotation => {
      annotation.status = status;
      annotation.save();
    });
    res.status(200).json({ message: 'Review status updated' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

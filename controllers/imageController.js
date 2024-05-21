const Image = require('../models/Image');
const { uploadImage } = require('../utils/aws');
const { simulateAnnotation } = require('../utils/annotationAI');

exports.uploadImage = async (req, res) => {
  try {
    const file = req.file;
    const s3Response = await uploadImage(file);
    const image = new Image({
      filename: file.originalname,
      url: s3Response.Location,
      userId: req.user.userId
    });
    await image.save();
    
    const annotation = await simulateAnnotation(image.url);
    image.annotations.push(annotation._id);
    await image.save();
    
    res.status(201).json(image);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

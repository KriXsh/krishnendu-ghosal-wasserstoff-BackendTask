const Annotation = require('../models/Annotation');

exports.getAnnotations = async (req, res) => {
  try {
    const annotations = await Annotation.find();
    res.status(200).json(annotations);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getAnnotationById = async (req, res) => {
  try {
    const { id } = req.params;
    const annotation = await Annotation.findById(id);
    if (!annotation) {
      return res.status(404).json({ error: 'Annotation not found' });
    }
    res.status(200).json(annotation);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const mongoose = require('mongoose');

const annotationSchema = new mongoose.Schema({
  imageUrl: { type: String, required: true },
  objects: [
    {
      label: { type: String, required: true },
      coordinates: { type: [Number], required: true }
    }
  ]
});

module.exports = mongoose.model('Annotation', annotationSchema);

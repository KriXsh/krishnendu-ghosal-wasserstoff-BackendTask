const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
  filename: { type: String, required: true },
  url: { type: String, required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  annotations: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Annotation' }]
});

module.exports = mongoose.model('Image', imageSchema);

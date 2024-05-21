const Annotation = require('../models/Annotation');

exports.simulateAnnotation = async (imageUrl) => {
  const annotation = new Annotation({
    imageUrl,
    objects: [
      { label: 'object1', coordinates: [100, 100, 200, 200] },
      { label: 'object2', coordinates: [300, 300, 400, 400] }
    ]
  });
  await annotation.save();
  return annotation;
};

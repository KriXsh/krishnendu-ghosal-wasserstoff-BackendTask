const Annotation = require('../models/Annotation');

exports.exportAnnotations = async (format) => {
  const annotations = await Annotation.find({ status: 'approved' });
  switch (format) {
    case 'csv':
      return exportCSV(annotations);
    case 'json':
      return exportJSON(annotations);
    case 'xml':
      return exportXML(annotations);
    default:
      throw new Error('Invalid format');
  }
};

const exportCSV = (annotations) => {
  const header = 'imageUrl,label,coordinates\n';
  const rows = annotations.map(a => a.objects.map(o => `${a.imageUrl},${o.label},${o.coordinates.join(',')}`).join('\n')).join('\n');
  return header + rows;
};

const exportJSON = (annotations) => {
  return JSON.stringify(annotations);
};

const exportXML = (annotations) => {
  let xml = '<?xml version="1.0"?>\n<annotations>\n';
  annotations.forEach(a => {
    xml += `  <annotation>\n    <imageUrl>${a.imageUrl}</imageUrl>\n`;
    a.objects.forEach(o => {
      xml += `    <object>\n      <label>${o.label}</label>\n      <coordinates>${o.coordinates.join(',')}</coordinates>\n    </object>\n`;
    });
    xml += '  </annotation>\n';
  });
  xml += '</annotations>';
  return xml;
};

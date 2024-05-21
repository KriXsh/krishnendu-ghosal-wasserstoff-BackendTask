const { exportAnnotations } = require('../utils/exportData');

exports.exportAnnotations = async (req, res) => {
  try {
    const { format } = req.query;
    const data = await exportAnnotations(format);
    res.setHeader('Content-Disposition', `attachment; filename=annotations.${format}`);
    res.status(200).send(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

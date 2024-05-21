const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Import the cors middleware
const authRoutes = require('./routes/authRoutes');
const imageRoutes = require('./routes/imageRoutes');
const annotationRoutes = require('./routes/annotationRoutes');
const reviewRoutes = require('./routes/reviewRoutes');
const exportRoutes = require('./routes/exportRoutes');
require('dotenv').config();

const app = express();

const corsOptions = {
  origin: 'http://localhost:3000', // Allow only this origin to access the API
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions)); // Use CORS middleware with options
app.use(bodyParser.json());
app.use('/auth', authRoutes);
app.use('/images', imageRoutes);
app.use('/annotations', annotationRoutes);
app.use('/reviews', reviewRoutes);
app.use('/export', exportRoutes);

module.exports = app;

const express = require('express');
const mongoose = require('mongoose');
const vehicleRoutes = require('./routes/vehicleRoutes');
const errorHandler = require('./middleware/errorHandler');
const app = express();
const PORT = 5000;

// Middleware
app.use(express.json());

// Routes
app.use('/api/vehicles', vehicleRoutes);

// Root route
app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Fleet API is running'
  });
});

// 404 fallback
app.use((req, res) => {
  res.status(404).json({
    message: 'Route not found'
  });
});

// Error handler
app.use(errorHandler);

// Connect MongoDB
mongoose
  .connect('mongodb://127.0.0.1:27017/fleetDB')
  .then(() => {
    console.log('Connected to Fleet MongoDB');

    app.listen(PORT, () => {
      console.log(`Fleet API is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Database connection error:', error);
  });
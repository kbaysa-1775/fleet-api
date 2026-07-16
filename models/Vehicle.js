const mongoose = require('mongoose');
const vehicleSchema = new mongoose.Schema(
  {
    make: {
      type: String,
      required: true
    },
    model: {
      type: String,
      required: true
    },
    year: {
      type: Number,
      required: true
    },
    licensePlate: {
      type: String,
      required: true,
      unique: true
    },
    status: {
      type: String,
      default: 'Available'
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('Vehicle', vehicleSchema);
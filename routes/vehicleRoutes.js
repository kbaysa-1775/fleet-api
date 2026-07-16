const express = require('express');
const {
  getVehicles,
  addVehicle
} = require('../controllers/vehicleController');

const validateVehicle = require('../middleware/validateVehicle');
const router = express.Router();

router
  .route('/')
  .get(getVehicles)
  .post(validateVehicle, addVehicle);

module.exports = router;
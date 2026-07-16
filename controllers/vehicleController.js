const Vehicle = require('../models/Vehicle');
const getVehicles = async (req, res, next) => {
  try {
    const vehicles = await Vehicle.find();

    res.status(200).json(vehicles);
  } catch (error) {
    next(error);
  }
};

const addVehicle = async (req, res, next) => {
  try {
    const newVehicle = await Vehicle.create(req.body);

    res.status(201).json(newVehicle);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getVehicles,
  addVehicle
};
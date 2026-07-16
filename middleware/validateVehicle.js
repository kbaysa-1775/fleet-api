const validateVehicle = (req, res, next) => {
  const { licensePlate } = req.body;

  if (!licensePlate) {
    return res.status(400).json({
      message: 'License plate is required.'
    });
  }

  next();
};

module.exports = validateVehicle;
const Car = require("../models/CarModel");

exports.create = async (req, res) => {
  try {
    const {
      name,
      brand,
      model,
      year,
      pricePerDay,
      pricePerHour,
      transmission,
      fuelType,
      seats,
      description,
      available,
      images,
    } = req.body;

    let imagesArr = [];

    if (req.files && req.files.length > 0) {
      imagesArr = req.files.map((file) => file.path);
    }

    const data = new Car({
      name,
      brand,
      model,
      year,
      pricePerDay,
      pricePerHour,
      transmission,
      fuelType,
      seats,
      description,
      images: imagesArr,
      available,
    });

    const response = await data.save();
    res.status(200).json(response);
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ error: "Internal server error", details: err.message });
  }
};

exports.all = async (req, res) => {
  try {
    const response = await Car.find();
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json(err, { error: "internal server error" });
  }
};

exports.getById = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await Car.findById(id);
    res.status(200).json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json(err, { error: "internal server error" });
  }
};

exports.deleted = async (req, res) => {
  try {
    const id = req.params.id;
    const response = await Car.findByIdAndDelete(id);
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json(err, { error: "internal server error" });
  }
};

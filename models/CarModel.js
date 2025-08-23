const mongoose = require("mongoose");

const carSchema = new mongoose.Schema({
  name: { type: String, required: true },
  brand: { type: String, required: true },
  model: { type: String, required: true },
  year: { type: Number, required: true },
  pricePerDay: { type: Number, required: true },
  pricePerHour: { type: Number, required: true },
  transmission: { type: String, enum: ["automatic", "manual"], required: true },
  fuelType: {
    type: String,
    enum: ["petrol", "diesel", "electric"],
    required: true,
  },
  seats: { type: Number, required: true },
  description: { type: String },
  images: [{ type: String }],
  available: { type: Boolean, default: true },
});

const Car = mongoose.model("car", carSchema);
module.exports = Car;

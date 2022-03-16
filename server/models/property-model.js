const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Property = new Schema(
  {
    type: { type: String, required: true },
    suburb: { type: String, required: true },
    location: { type: String, required: true },
    price: { type: Number, required: true },
    bedrooms: { type: Number, required: true },
    bathrooms: { type: Number, required: true },
    available: { type: String, required: true },
    images: { type: Array, require: true }
  },
  { timestamps: true }
);

module.exports = mongoose.model('properties', Property);

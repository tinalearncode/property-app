const Property = require('../models/property-model');
const initialProperties = require('./../data.json');

createProperty = (req, res) => {
  const body = req.body;

  if (!body) {
    return res.this.status(400).json({
      success: false,
      error: 'You must provide a property'
    });
  }

  const property = new Property(body);

  if (!property) {
    return res.status(400).json({ success: false, error: err });
  }

  property
    .save()
    .then(() => {
      return res.status(201).json({
        success: true,
        id: property._id,
        message: 'Property created!'
      });
    })
    .catch(error => {
      return res.status(400).json({
        error,
        message: 'Property not created!'
      });
    });
};

updateProperty = async (req, res) => {
  const body = req.body;
  if (!body) {
    return res.status(400).json({
      success: false,
      error: 'You must provide a body to update'
    });
  }

  Property.findOne({ _id: req.params.id }, (err, property) => {
    if (err) {
      return res.status(404).json({
        err,
        message: 'Property not found!'
      });
    }

    property = JSON.parse(JSON.stringify(body));

    property
      .save()
      .then(() => {
        return res.status(200).json({
          success: true,
          id: property._id,
          message: 'Property updated!'
        });
      })
      .catch(error => {
        return res.status(404).json({
          error,
          message: 'Property not updated!'
        });
      });
  });
};

deleteProperty = async (req, res) => {
  await Property.findByIdAndDelete({ _id: req.params.id }, (err, property) => {
    if (err) {
      return req.status(400).json({ success: false, error: err });
    }

    if (!property) {
      return res.status(404).json({ success: false, error: 'Property not found' });
    }

    return res.status(200).json({ success: true, data: property });
  }).catch(err => console.log(err));
};

getPropertyById = async (req, res) => {
  await Property.findOne({ _id: req.params.id }, (err, property) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }

    if (!property) {
      return res.status(404).json({ success: false, error: 'Property not found' });
    }

    return res.status(200).json({ success: true, data: property });
  }).catch(err => console.log(err));
};

getProperties = async (req, res) => {
  await Property.find({}, (err, properties) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }

    if (!properties.length) {
      return res.status(404).json({ success: false, error: 'Property not found' });
    }

    return res.status(200).json({ success: true, data: properties });
  })
    .clone()
    .catch(err => console.log(err));
};

seedData = (req, res) => {
  Property.insertMany(initialProperties)
    .then(() => {
      res.send('seed');
      return res.status(201).json({
        success: true,
        count: initialProperties.length,
        message: 'data seeded!'
      });
    })
    .catch(error => {
      return res.status(400).json({
        error,
        message: 'data not seeded!'
      });
    });
};

module.exports = {
  createProperty,
  updateProperty,
  deleteProperty,
  getProperties,
  getPropertyById,
  seedData
};

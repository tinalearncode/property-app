const express = require('express');
const PropertyCtrl = require('../controllers/property-ctrl');
const router = express.Router();

router.post('/property', PropertyCtrl.createProperty);
router.put('/property/:id', PropertyCtrl.updateProperty);
router.delete('/property/:id', PropertyCtrl.deleteProperty);
router.get('/property/:id', PropertyCtrl.getPropertyById);
router.get('/properties', PropertyCtrl.getPropertys);

module.exports = router;

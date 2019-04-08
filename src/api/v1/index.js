const express = require('express');

const router = express.Router();
const addFeatureRoute = require('./add-feature');


router.use('/addFeature', addFeatureRoute);


module.exports = router;

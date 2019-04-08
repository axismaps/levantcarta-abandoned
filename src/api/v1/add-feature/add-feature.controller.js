const httpStatus = require('http-status');
const { Feature } = require('@models');

/**
 * addFeature
 * @public
 */
exports.addFeature = async (req, res, next) => {
  const geo = req.body;
  const feature = Feature.build({
    name: geo.features[0].properties.name,
    firstyear: geo.features[0].properties.firstyear,
    lastyear: geo.features[0].properties.lastyear
  });

  feature.save();
  res.status(httpStatus.OK);
  return res.json({
    responseCode: httpStatus.OK,
    responseMessage: 'OK',
    response: {}
  });
};

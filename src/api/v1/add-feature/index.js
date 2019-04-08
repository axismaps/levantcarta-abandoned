const express = require('express');
const validate = require('express-validation');
const controller = require('./add-feature.controller');
const validator = require('./add-feature.validator');

const router = express.Router();

/**
 * @api {post} api/v1/addFeature addFeature
 * @apiDescription Create a new feature from geojson
 * @apiVersion 1.0.0
 * @apiName addFeature
 * @apiPermission public
 *
 * @apiParam  {String} [param]  Put some parameter schema here
 *
 * @apiSuccess {Number} responseCode     HTTP Response Code
 * @apiSuccess {String} responseMessage  Response message
 * @apiSuccess {Object} response         Response object
 *
 * @apiError (Bad Request 400)  ValidationError  Some parameters may contain invalid values
 */
router.route('/')
  .post(validate(validator.joiSchema), controller.addFeature);

module.exports = router;

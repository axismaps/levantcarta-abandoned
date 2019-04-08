const Joi = require('joi');

module.exports = {
  name: 'addFeature',
  path: '/api/v1/addFeature',
  type: 'post',
  joiSchema: {
    body: {
      type: Joi.string().required().valid('FeatureCollection'),
      features: Joi.array().required().items(
        Joi.object().keys({
          type: Joi.string().required().valid('Feature'),
          properties: Joi.object().keys({
            firstyear: Joi.number().required(),
            lastyear: Joi.number().required()
          }),
          geometry: Joi.object().required().keys({
            type: Joi.string().required().valid('Point'),
            coordinates: Joi.array().required().length(2).items(
              Joi.number()
            )
          })
        })
      )
    },
    response: {
      200: {
        description: 'OK',
        body: {
          responseCode: 200,
          responseMessage: Joi.string().required(),
          response: {}
        }
      },
      400: {
        description: 'Error Response',
        body: {
          responseCode: 400,
          responseMessage: Joi.string().required(),
          response: {
            errors: Joi.array().items(Joi.object().keys({
              errorCode: Joi.string().required(),
              errorTitle: Joi.string().required(),
              errorDescription: Joi.string().required(),
              errorDebugDescription: Joi.string()
            }))
          }
        }
      }
    }
  }
};

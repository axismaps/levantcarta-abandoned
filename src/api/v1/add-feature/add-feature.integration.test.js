/* eslint-disable arrow-body-style */
const request = require('supertest');
const httpStatus = require('http-status');
const app = require('@app');

describe('POST /api/v1/addFeature', () => {
  let body;

  beforeEach(() => {
    body = {
      type: 'FeatureCollection',
      features: [
        {
          type: 'Feature',
          properties: {
            name: 'Nejmeh Square',
            firstyear: 1930,
            lastyear: 8888,
            district: 'Central'
          },
          geometry: {
            type: 'Point',
            coordinates: [
              35.50457239151001,
              33.896708371415954
            ]
          }
        }
      ]
    };
  });

  afterEach(() => {});

  it('should integrate api /addFeature', () => {
    return request(app)
      .post('/api/v1/addFeature')
      .send(body)
      .expect(httpStatus.OK)
      .then((res) => {
        expect(res.body).toHaveProperty('responseCode');
        expect(res.body).toHaveProperty('responseMessage');
        expect(res.body.responseCode).toBe(200);
        expect(res.body.responseMessage).not.toBe(undefined);
      });
  });
});

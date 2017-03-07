const expect = require('expect');
const request = require('supertest');

var {app} = require('./../connector/app');

describe('GET /eureka/apps', () => {
  it('Should get Eureka app list', (done) => {
    request(app)
      .get('/getRegisteredApplications')
      .expect(200)
      .expect((res) => {
        expect(res.body.applications.application.length).toBeGreaterThan(1);
      })
      .end(done);
  });
});

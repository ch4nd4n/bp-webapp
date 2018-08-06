/* eslint-env node, mocha */

const chai = require('chai');
const winston = require('winston');

const { assert } = chai;
const chaiHttp = require('chai-http');
const app = require('../src/server/app');
const PORT = process.env.PORT || 3001;
chai.use(chaiHttp);

describe('app', () => {
  let server = null;
  before(() => {
    server = app.listen(PORT, () => {
      winston.info(`Server started ${PORT}`);
    });
  });
  after(() => {
    server.close();
  });
  // tests here
  it('should fetch root', (done) => {
    chai.request(app)
      .get('/')
      .end(((err, res) => {
        assert(res.status, 200);
        done();
      }));
  });
});

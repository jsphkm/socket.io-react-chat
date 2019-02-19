const chai = require('chai');
const chaiHttp = require('chai-http');
const { app, startServer, stopServer } = require('../server');

const expect = chai.expect;
chai.use(chaiHttp);

describe('Integration tests for server.js', () => {
  before(() => {
    return startServer(true);
  });

  after(() => {
    return stopServer();
  });
});
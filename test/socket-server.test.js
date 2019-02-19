const chai = require('chai');
const chaiHttp = require('chai-http');
const { app, startServer, stopServer, PORT, socketio } = require('../server');

const expect = chai.expect;
chai.use(chaiHttp);

describe('Integration tests for server.js', function() {
  const servervals = {
    app,
    PORT,
    socketio
  };
  before(function() {
    return startServer(servervals);
  });

  after(function() {
    return stopServer();
  });

  describe('NAMESPACE', function() {
    it('Should connect to default namespace', function() {
      return;
    })
  })
});
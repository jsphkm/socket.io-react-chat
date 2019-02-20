const chai = require('chai');
const chaiHttp = require('chai-http');
const { app, startServer, stopServer } = require('../server');

const expect = chai.expect;
chai.use(chaiHttp);

describe('Integration tests for server.js', function() {
  // const servervals = {
  //   app,
  //   PORT,
  //   socketio
  // };
  let server;

  beforeEach(function() {
    server = startServer();
  });

  afterEach(function(done) {
    // return stopServer(server);
    server.close(done);
  });

  describe('GET', function() {
    it('Should respond to /', function() {
      return chai.request(server)
        .get('/')
        .then(res => {
          expect(res).to.have.status(200);
        }).catch(function(err) {
          console.error('Get / has failed');
        });
    })
  })

  describe('NAMESPACE', function() {
    it('Should connect to default namespace', function() {
      return;
    });
  });
});
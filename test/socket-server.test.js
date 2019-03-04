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

  before(function() {
    server = startServer();
  });

  after(function(done) {
    stopServer(server);
    done();
    // server.close(done);
  });

  describe('GET', function() {
    it('Should respond to /', (done) => {
        chai.request(app)
          .get('/')
          .end((err, res) => {
            expect(res).to.have.status(200);
            done();
          })
      }
    )
  })

  describe('NAMESPACE', function() {
    it('Should connect to default namespace', function(done) {
      return done();
    });
  });
});
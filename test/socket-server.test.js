const chai = require('chai');
const chaiHttp = require('chai-http');
const {
  app,
  startServer,
  stopServer,
  startSocketServer,
  stopSocketServer,
  connectNameSpace,
} = require('../server');
const clientio = require('socket.io-client');

const expect = chai.expect;
chai.use(chaiHttp);

describe('Integration tests for server.js', function() {
  // const servervals = {
  //   app,
  //   PORT,
  //   socketio
  // };
  let server;
  let socketserver;
  let socketio;

  before(function() {
    server = startServer();
  });

  after(function(done) {
    stopServer(server);
    done();
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

  describe('SOCKET SERVER', function() {
    it('Should start the socket server', (done) => {
      const res = startSocketServer('/test');
      socketserver = res[0];
      socketio = res[1];
      done();
    })

    it('Should connect to namespace', (done) => {
      const clientsocket = clientio('http://localhost', {
        path: '/dynamic-101'
      });
      console.log(clientsocket);
      done();
    })

    it('Should stop the socket server', (done) => {
      stopSocketServer(socketserver);
      done();
    })
  })
});
const express = require('express');
const app = express();
// // const server = require('http').Server(app);
// const server = app.listen(80);
// const io = require('socket.io')(server, {
//   pingTimeout: 60000,
// });

app.use(express.static('public'));

app.get('/', (req, res) => {
  console.log('has reached to app get');
  res.sendFile(`${__dirname}/public/index.html`);
});

// io.on('connection', (socket) => {
//   socket.on('join_room', (data) => {
//     console.log(io.rooms);
//     socket.join(data.roomname);
//     console.log(`${data.username} has joined the room called ${data.roomname}`);
//     // socket.broadcast.emit('user_connect', `${data.username} has joined the room`);
//     io.to(data.roomname).emit('user_connect', `${data.username} has joined the room`);
//     io.to(data.roomname).emit('join_room', data.username);

//     socket.on('disconnect', () => {
//       console.log('has disconnected');
//       socket.broadcast.emit('user_disconnect', `${data.username} has left the room`);
//     });
//   });

//   // socket.broadcast.emit('user_connect', 'a user has joined the room');
//   socket.on('chat message', msg => (
//     io.emit('chat message', msg)
//   ));
// });

// server.listen(8000, () => (
//   console.log('listening on *:8000')
// ));

// Need to move the codes below to config.js
const PORT = 80;

let server = '';
let io = '';
const startServer = testEnv => {
  // const server = require('http').Server(app);
  server = app.listen(PORT, () => {
    console.log(`Express server is listening on port ${PORT}`)
  }).on('error', err => {
    console.log('Express has failed to connect');
    reject(err);
  });
  // const io = require('socket.io')(server, {
  //   pingTimeout: 60000,
  // });
  //io = require('socket.io')(server);
  io = require('socket.io')(server, {
    pingTimeout: 60000,
  });
};

const stopServer = () => {
  server.close(err => {
    if (err) {
      return reject(err);
    } else {
      console.log('Express server has shut down');
    }
  });
}

startServer();

io.on('connection', (socket) => {
  console.log('connected to default io on /');

  socket.on('connectNamespace', (data) => {
    console.log('connectNamespace event detected');
    let nsp = io.of(`/${data.namespace}`);
    nsp.on('connection', (newsocket) => {
      console.log('connected using new namespace');
    })
  })
})


module.export = { app, startServer, stopServer};
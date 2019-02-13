const express = require('express');

const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server, {
  pingTimeout: 60000,
});

app.use(express.static('public'));

app.get('/', (req, res) => {
  console.log('has reached to app get');
  res.sendFile(`${__dirname}/public/index.html`);
});

io.on('connection', (socket) => {
  socket.on('join_room', (data) => {
    console.log(io.rooms);
    console.log(`${data.username} has joined room`);
    socket.join(data.roomname);
    console.log(io.rooms);
    socket.broadcast.emit('user_connect', `${data.username} has joined the room`);
    io.emit('join_room', data.username);

    socket.on('disconnect', () => {
      console.log('has disconnected');
      socket.broadcast.emit('user_disconnect', `${data.username} has left the room`);
    });
  });

  // socket.broadcast.emit('user_connect', 'a user has joined the room');
  socket.on('chat message', msg => (
    io.emit('chat message', msg)
  ));
});

server.listen(8000, () => (
  console.log('listening on *:8000')
));

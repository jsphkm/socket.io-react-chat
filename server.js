const express = require('express');

const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

app.use(express.static('public'));

app.get('/', (req, res) => (
  res.sendFile(`${__dirname}/public/index.html`)
));

io.on('connection', (socket) => {
  socket.on('join_room', (username) => {
    socket.join('chat room');
    socket.broadcast.emit('user_connect', `${username} has joined the room`);
    io.emit('join_room', username);

    socket.on('disconnect', () => {
      socket.broadcast.emit('user_disconnect', `${username} has left the room`);
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

const express = require('express');

const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.use(express.static('public'));

app.get('/', (req, res) => (
  res.sendFile(`${__dirname}/public/index.html`)
));

io.on('connection', (socket) => {
  socket.broadcast.emit('user_connect', 'a user has joined the room');
  socket.on('chat message', msg => (
    io.emit('chat message', msg)
  ));
  socket.on('disconnect', () => {
    socket.broadcast.emit('user_disconnect', 'a user has left the room');
  });
});

http.listen(3000, () => (
  console.log('listening on *:3000')
));

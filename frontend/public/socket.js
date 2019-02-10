$(() => {
  /* global io:true */
  /* eslint no-undef: "error" */
  const socket = io();

  socket.on('user_connect', (msg) => {
    $('#messages').append($('<li>').text(msg));
  });
  socket.on('user_disconnect', (msg) => {
    $('#messages').append($('<li>').text(msg));
  });
  $('#message-form').submit((e) => {
    e.preventDefault(); // prevents page reloading
    socket.emit('chat message', $('#m').val());
    $('#m').val('');
    return false;
  });
  socket.on('chat message', msg => (
    $('#messages').append($('<li>').text(msg))
  ));
  $('#username-form').submit((e) => {
    e.preventDefault();
    socket.emit('join_room', $('#username-input').val());
    return false;
  });
  socket.on('join_room', username => (
    $('#users').append($('<li>').text(username))
  ));
});

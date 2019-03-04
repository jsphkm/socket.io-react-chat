import io from 'socket.io-client';

export const NEW_SOCKET_CONNECTION = 'NEW_SOCKET_CONNECTION';
export const newSocketConnection = socket => ({
  type: NEW_SOCKET_CONNECTION,
  socket: socket
});

export const connectDefault = data => dispatch => {
  const socket = io.connect('http://localhost:80');
  console.log('socket connected');
  socket.on('user_connect', (msg) => {
    console.log(`append a message on frontend that the user has connected`);
  })
  return socket;
}

export const connectNamespace = data => dispatch => {
  data.socket.emit('connectNamespace', data.namespace);

  return io(`/${data.namespace}`).connect(`http://localhost:80/${data.namespace}`)
  // .then(socket => dispatch(newSocketConnection(socket)))
  // .catch(err => {
  //   console.log(err);
  //   return Promise.reject();
  // })
};
const net = require('net');

const sockets = [];

const server = net.createServer(socket => {
  sockets.push(socket);
  socket.write('Welcome to the server!');

  socket.on('data', data => {
    sockets.forEach(clientSocket => {
      if (clientSocket !== socket) {
        clientSocket.write(data);
      }
    });
  });

  socket.on('end', () => {
    const index = sockets.indexOf(socket);
    sockets.splice(index, 1);
  });
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});

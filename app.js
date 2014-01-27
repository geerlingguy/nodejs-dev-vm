// Load the net module to create a tcp server.
var net = require('net');

// Create a server that simply responds to every connection with 'Hello'.
var server = net.createServer(function (socket) {
  socket.addListener("connect", function () {
    socket.end("Hello!\n");
  });
});

// Listen on port 49999 (see IANA TCP Port Number Registry).
server.listen(49999, "localhost");

// Tell the user the server is running.
console.log("TCP server is running on port 49999.");

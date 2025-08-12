// Start the keep-alive web server
var http = require('http');

http.createServer(function (req, res) {
  res.write("I'm alive");
  res.end();
}).listen(process.env.PORT || 8080); // Render uses process.env.PORT

console.log("Keep-alive server started");

// Start the bot
require("./src/controller.js").start();

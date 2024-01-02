// Create a web server
// Create a route to /comments that returns the following HTML
// <ul>
//   <li>Comment 1</li>
//   <li>Comment 2</li>
//   <li>Comment 3</li>
// </ul>
// Run the web server and make sure it returns the HTML in the browser

var http = require('http');

var server = http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('<ul><li>Comment 1</li><li>Comment 2</li><li>Comment 3</li></ul>');
});

server.listen(8080);
console.log('Server listening on port 8080');
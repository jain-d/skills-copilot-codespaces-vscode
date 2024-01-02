// Create web server
var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var fs = require('fs');

// Create server at port 3000
var server = app.listen(3000, function () {
  console.log('Server running at http://localhost:' + server.address().port);
}
);

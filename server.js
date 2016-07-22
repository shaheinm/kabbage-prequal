var path = require('path');
var express = require('express');

var app = express();

var staticPath = path.join(__dirname, '/build');
app.use(express.static(staticPath));

app.listen(8080, function() {
  console.log('listening');
});

var express = require('express');
var path = require('path');
var app = express();
var PORT = process.env.PORT || 3000
app.use(express.static('public'));

app.get('/', function (req, res) {
  res.sendFile('index.html');
});

app.listen(PORT, function () {
  console.log('Example app listening on port ' + PORT + '!');
});
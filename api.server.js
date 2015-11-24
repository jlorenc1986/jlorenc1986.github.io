var path = require('path');
var express = require('express');

var app = express();


app.get('/users', function (req, res) {

  res.json({name:'lorenc'});
});


app.listen(3002, 'localhost', function (err) {
  // body...
  if (err) {
  console.error(err);
  return;
}

console.log('Listening at http://localhost:3002');
});

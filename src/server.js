var urlShotener = require("../src/url-shortener")
var express = require('express');
var app = express();


app.get('/shorten', function (req, res) {
    //  var urlInput = req.params.dateString;
     console.log("Param: " + req.params);
     var response = urlShotener.shotener(urlInput);
     console.log('Response: ' + response);
     res.send(response);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

module.exports.app = app;
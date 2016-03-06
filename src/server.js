var urlShotener = require("../src/url-shortener")
var express = require('express');
var app = express();

   app.get('/:dateString', function (req, res) {
        var urlInput = req.params.dateString;
        console.log("Param: " + urlInput);
        var response = urlShotener.shotener(urlInput);
        console.log('Response: ' + response);
        res.send(response);
    })

module.exports.app = app;
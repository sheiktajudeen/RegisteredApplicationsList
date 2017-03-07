const axios = require('axios');
const express = require('express');

var config = require('../../config/AppConfig.json');
var app = express();

app.get('/getRegisteredApplications', function (req, res) {
  axios.get(config.EngProdEureka).then((response) => {
    return res.send(response.data);
  });
});

var server = app.listen(3000, function () {
    console.log("Express Started on Port 3000");
});

module.exports = {app};

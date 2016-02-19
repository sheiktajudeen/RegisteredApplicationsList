var express = require('express');
var cors = require('cors');
var config = require('../../config/AppConfig.json');
var nodeClient = require('node-rest-client');

var app = express();
app.use(cors());

app.get('/getRegisteredApplications', function (req, res) {

    var restClient = nodeClient.Client,
        cl = new restClient();

    cl.get(config.EngProdEureka, function (data, response) { //GET the Registered Applications from Eureka
        //console.log(JSON.stringify(data));
        res.json(JSON.stringify(data));
    });
});

var server = app.listen(3000, function () {
    console.log("Express Started on Port 3000");
});



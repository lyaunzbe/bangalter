
/**
* Entry point
*/
var express = require('express')
  , fs = require('fs')
  , db = require('./db-connect');

//load config stuff
var config_file = require('yaml-config');
config = config_file.readConfig('config/config.yaml');

var app = module.exports = express.createServer();
global.app = app;

//app configuration
require('./settings').init();

//start db
db.startup(config.db.uri);


require('./routes/index').init();

// Start the app by listening on <port>
var port = 1337;
app.listen(port)
console.log('Express app started on port '+port)


#!/usr/bin/env node
var http = require('http');
var express = require('express');
var app = express();
var path = require('path');
app.set('views',path.join(__dirname,'../client/views'));
app.set('view engine','jade');
app.use(express.static(path.join(__dirname,'../client/public')));



http.createServer(app).listen(3000,'127.0.0.1');//connect

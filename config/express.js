var express = require('express');
var app = express();
var load = require('express-load');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');
var ui5Router = require('../app/ui5/ui5Router');

module.exports = function() {
        
    app.set('view engine', 'ejs');
    app.set('views', './app/views');
    
    app.use('/', ui5Router.getRouter(express));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));
    app.use(expressValidator());
 
    load('infra', { cwd: 'app' })
        .then('model')
        .then('controller')
        .then('routes')
        .into(app);

    return app;

};
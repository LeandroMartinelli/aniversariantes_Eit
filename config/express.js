var express = require('express');
var app = express();
var consign = require('consign');
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
 
    consign({
        cwd: 'app',
        extensions: ['.js', '.json', '.node'],
        verbose: false
    })
        .include('model')
        .then('controller')
        .then('routes')
        .into(app);

    return app;

};
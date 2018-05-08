var express = require('express');
var app = express();
var consign = require('consign');
var ui5Router = require('../app/ui5Router');

module.exports = function() {
    
    app.set('view engine', 'ejs');
    app.set('views', './app/views');

    app.use('/', ui5Router.getRouter(express));

    consign({
        cwd: 'app',
        extensions: ['.js', '.json', '.node'],
        verbose: false
    })
        .include('controller')
        .then('routes')
        .into(app);

    return app;

};
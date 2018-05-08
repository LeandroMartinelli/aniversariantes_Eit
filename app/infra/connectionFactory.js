var mysql = require('mysql');

module.exports = function () {

    var _host   = process.env.DB_HOST || "us-cdbr-iron-east-04.cleardb.net";
    var _user   = process.env.DB_USER || "b0cc683bfc753f";
    var _pass   = process.env.DB_PASSWORD || "e3b79377";
    var _dbname = process.env.DB_NAME || "heroku_c36df122ec23c4f";

    return mysql.createConnection({
        host: _host,
        user: _user,
        password: _pass,
        database: _dbname
    });
}
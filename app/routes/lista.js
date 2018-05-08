module.exports = function(app){

    app.get('/lista', function (req, res) {

        var connection = app.infra.connectionFactory;
        var connectionDAO = new app.infra.connectionDAO(connection);

        connectionDAO.listaFuncionarios(function(error, results){
            res.render('/lista',{resultsHTML:results});
        });
        // connection.end();
    });

}
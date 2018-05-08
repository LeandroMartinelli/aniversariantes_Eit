module.exports = function(app){

    app.get('/lista', function (req, res) {
        res.render('/lista');
    });

    app.post('/cadastro', function(req, res){

        var funcionario = req.body;
        var connection = app.infra.connectionFactory;
        var connectionDAO = new app.infra.connectionDAO(connection);

        connectionDAO.inserirFuncionario(funcionario, function(error, result){
            res.redirect('/lista');
        });
        // connection.end();
    });

}
module.exports = function (app){

    var aniversarios = {
        
        cadastro: function(req, res) {
            res.render('./cadastro');
        },

        POST_cadastro: function(req, res) {
            res.end("CADASTRO OK");
        },

        funcionarios: function(req, res) {
            var connectionDAO = new app.infra.connectionDAO(app);
            var modelFuncionario = new app.model.funcionarios();

            connectionDAO.listarFuncionarios(function(error, result) {
                if (error) {
                    console.log("Erro no DB" + error);
                } else {
                    res.format({
                        json:function() {
                            res.json(resilt);
                        }
                    });
                }
            });
        }

    }
    return  aniversarios;
}
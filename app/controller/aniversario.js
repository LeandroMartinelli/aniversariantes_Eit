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
                }
                res.format({
                    json: function() {
                        res.json(result);
                    }
                });
            });
        },

        funcionariosDoDia: function(req, res) {
            var connectionDAO = new app.infra.connectionDAO(app);
            var modelFuncionario = new app.model.funcionarios();

            connectionDAO.FuncionariosDoDia(function(error, result) {
                if (error) {
                    console.log("Erro no DB" + error);
                }
                res.format({
                    json: function() {
                        res.json(result);
                    }
                });
            });
        }

    }
    return  aniversarios;
}
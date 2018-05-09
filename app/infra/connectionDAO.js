function connectionDAO(connection){
    this._connection = connection;
};

connectionDAO.prototype.listarFuncionarios = function(callback){
    this._connection.query('SELECT * FROM funcionarios WHERE inativo <> 1', callback);
};

connectionDAO.prototype.inserirfuncionario = function(funcionario, callback){
    this._connection.query('INSERT INTO funcionarios SET ?', funcionario, callback);
};

module.exports = function (){
    return connectionDAO;
};
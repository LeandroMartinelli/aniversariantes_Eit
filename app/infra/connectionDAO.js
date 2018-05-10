function connectionDAO(connection){
    this._connection = connection;
};

connectionDAO.prototype.listarFuncionarios = function(callback){
    
    var mes = new Date().getMonth();
    (mes < 10 ) ? mes = "%-0" + mes + "-%" : mes = "%-" + mes + "-%"; 
    mes = "%-07-%";
    // var sql = 'SELECT * FROM funcionarios WHERE inativo is null AND nascimento LIKE ?';
    var sql = 'SELECT * FROM funcionarios WHERE inativo is null';
    
    this._connection.infra.connectionFactory.query(sql, callback);
    // this._connection.infra.connectionFactory.query(sql, [mes], callback);
    // this._connection.infra.connectionFactory.end();

};

connectionDAO.prototype.FuncionariosDoDia = function(callback){
    
    var mes = new Date().getMonth();
    var dia = new Date().getDate();
    var data = "";

    (mes < 10 ) ? data = "%-0" + mes : data = "%-" + mes;
    (dia < 10 ) ? data = data + "-0" + dia : data = data + "-" + dia + "%";

    data = "%-07-20%"
    // var sql = 'SELECT * FROM funcionarios WHERE inativo is null AND nascimento LIKE ?';
    var sql = 'SELECT * FROM funcionarios WHERE inativo is null';
    
    this._connection.infra.connectionFactory.query(sql, callback);
    // this._connection.infra.connectionFactory.query(sql, [data], callback);
    // this._connection.infra.connectionFactory.end();

};

connectionDAO.prototype.inserirfuncionario = function(funcionario, callback){
    this._connection.query('INSERT INTO funcionarios SET ?', funcionario, callback);
};

module.exports = function (){
    return connectionDAO;
};
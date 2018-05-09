module.exports = function () {
    return FuncionariosModel;
}

function FuncionariosModel() {
}

FuncionariosModel.prototype.formatJson = function (array, callback) {
    var arrayFuncionarios = array;
    var array = [];
    var obj = {};

    for (var i = 0; i < arrayFuncionarios.length; i++) {
        
        var i_aux = i + 1;
        
        obj = { "Nome": arrayFuncionarios[i].nome,
                "Nascimento": arrayFuncionarios[i].nascimento, 
                "Funcao": arrayFuncionarios[i].funcao, 
                "Foto": arrayFuncionarios[i].foto };
        
        arr.push(obj);
    }
    
    return arr;
    
}


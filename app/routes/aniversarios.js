module.exports = function(app){

    controller = app.controller.aniversario;

    app.get('/cadastro', controller.cadastro);
    app.post('/POST_cadastro', controller.POST_cadastro);

    app.get('/funcionarios', controller.funcionarios);

}
sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/routing/History",
    "sap/ui/model/json/JSONModel"
], function (Controller, History, JSONModel) {
    "use strict";
    return Controller.extend("aniversarios.controller.ListaDia", {

        onInit: function () {
            this.getOwnerComponent().getRouter().getRoute("ListaDia")
            .attachPatternMatched(this._onObjectMatched, this);
        },

        _onObjectMatched: function(evt) {
            var oValue = evt.mParameters.arguments.value;
            var dados = this.getView().getModel("funcionario").getData().Funcionarios;
            var funcionarios = [];
            for (var i = 0; i < dados.length; i++){
                if (dados[i].ProductName === oValue) {
                    var element = dados[i];
                    funcionarios.push(element);
                }
            }
            this.getOwnerComponent().getModel("funcionarioSelecionado").setData(funcionarios);
        },

        onNavPress: function () {
            
            var oHistory = History.getInstance();
            var sPreviousHash = oHistory.getPreviousHash();

            if (sPreviousHash !== undefined){
                window.history.go(-1);
            } else {
                var oRouter = this.getOwnerComponent().getRouter();
                oRouter.navTo("ListaMes");
            }
        }

    });
});
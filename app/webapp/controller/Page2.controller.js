sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/routing/History",
    "sap/ui/model/json/JSONModel"
], function (Controller, History, JSONModel) {
    "use strict";
    return Controller.extend("treinamento.ui5.controller.Page2", {

        onInit: function () {
            this.getOwnerComponent().getRouter().getRoute("Page2")
            .attachPatternMatched(this._onObjectMatched, this);
        },

        _onObjectMatched: function(evt) {
            var oValue = evt.getParamiter("argument").value;
            var oJson = new JSONModel();
            var dados = this.getView().getModel("produto").getData().Produtos;

            for (var i = 0; i < dados.length; i++){
                if (dados[i].ProductName === oValue) {
                    var element = dados[i];
                }
            }
            oJson.setData(element);
            this.getView().setModel(oJson, "produtoSelecionado");
        },

        onNavPress: function () {
            
            var oHistory = History.getInstance();
            var sPreviousHash = oHistory.getPreviousHash();

            if (sPreviousHash !== undefined){
                window.history.go(-1);
            } else {
                var oRouter = this.getOwnerComponent().getRouter();
                oRouter.navTo("Page1");
            }
        }

    });
});
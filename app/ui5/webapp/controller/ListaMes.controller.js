sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/resource/ResourceModel",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator"
], function (Controller, ResourceModel, Filter, FO) {
    "use strict";
    return Controller.extend("aniversarios.controller.ListaMes", {
        
        onPress: function (evt) {
            var oTile = evt.getSource();
            this.getOwnerComponent().getRouter().navTo("ListaDia", {
                value: oTile.getHeader()
            });
        },

    });

});
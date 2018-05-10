sap.ui.define([
    "sap/ui/core/UIComponent",
    "aniversarios/model/Ajax"
], function (UIComponent, model) {
    "use strict";
    return UIComponent.extend("aniversarios.Component", {

        metadata: {
            manifest: "json"
        },

        URL: "",

        init: function () {
            
            UIComponent.prototype.init.apply(this, arguments);
            
            var url = window.URI()._parts;
            
            if (url.port) {
                this.URL = "http://" + url.hostname + ":" + url.port;
            } else {
                this.URL = "http://" + url.hostname;
            }
            
            var that = this;

            var oModel = model.createModel(this, "mes");
            this.setModel(oModel);
            
            var oModelDia = model.createModel(this, "dia");
            this.setModel(oModelDia, "funcionarioSelecionado");

            
            this.getModel().attachEventOnce("requestCompleted", function() {
                that.getRouter().initialize();
            });

        },

    });
});
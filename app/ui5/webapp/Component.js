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
            
            var oModel = model.createModel(this);
            this.setModel(oModel);

            this.getModel().attachEventOnce("requestCompleted", function() {
                that.getRouter().initialize();
            });

        },

    });
});
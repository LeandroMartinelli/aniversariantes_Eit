sap.ui.define([
	"sap/ui/model/json/JSONModel",
	"sap/ui/Device",
	"sap/m/MessageBox"
], function (JSONModel, Device, MessageBox) {
	"use strict";

	return {

		createModel: function (oComponent, select) {
			var oModel = new JSONModel();

			var URL = "";
			if (select == "mes"){
				URL = oComponent.URL +'/funcionarios';
			} else if (select == "dia") {
				URL = oComponent.URL +'/funcionariosDoDia';
			};

			var json = {};
			$.ajax({
				url: URL,
				method: 'GET',
				crossDomain: true,
				async: 'true',
				headers: {
					'Accept': 'application/json'
				},
				success: function (res) {
					var oData = [];
					var Nome;
					for (var i = 0; i < res.length; i++) {
						var obj = {};
                        obj.nome = res[i].nome;
                        obj.nascimento = res[i].nascimento;
                        obj.funcao = res[i].funcao;
                        oData.push(obj);
						}
					oModel.setData(oData);
					oModel.fireEvent("requestCompleted");

					return oModel;
				},
				error: function (error) {
					oComponent.getRouter().getTargets().display("notAvailable");
				}
			});
			return oModel;
        }
        
	};

});

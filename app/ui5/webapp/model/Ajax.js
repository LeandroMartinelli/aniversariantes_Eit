sap.ui.define([
	"sap/ui/model/json/JSONModel",
	"sap/ui/Device",
	"sap/m/MessageBox"
], function (JSONModel, Device, MessageBox) {
	"use strict";

	return {

		createModel: function (oComponent) {
			var oModel = new JSONModel();

			var URL = oComponent.URL + '/funcionarios';
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
					var item = {};
					var clientName;
					for (var i = 0; i < res.length; i++) {
						var obj = {};
						var available = 0,
							using = 0;
						clientName = res[i].clientName;
						if (clientName !== item.client) {
							item.client = res[i].clientName;
							obj.client = res[i].clientName;
							obj.link = res[i].confluenceLink;
							obj.details = [];
							for (var i_aux = 0; i_aux < res.length; i_aux++) {
								if (clientName === res[i_aux].clientName) {
									available++;
									var detail = {};
									detail.id = res[i_aux].id;
									detail.onUse = res[i_aux].onUse;
									if (detail.onUse === 1) {
										using++;
									}
									detail.timeOn = res[i_aux].timeOn;
									obj.details.push(detail);
								}
							}
							obj.using = using;
							obj.available = available
							oData.push(obj);
						}
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

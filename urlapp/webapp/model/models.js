sap.ui.define([
	"sap/ui/model/json/JSONModel",
	"sap/ui/Device"
], function (JSONModel, Device) {
	"use strict";

	return {

		createDeviceModel: function () {
			var oModel = new JSONModel(Device);
			oModel.setDefaultBindingMode("OneWay");
			return oModel;
		},

		createEmptyPatient: function(){
			var oData = {
				"id": "",
				"age": "",
				"encounters": []
			}
			var oModel = new JSONModel(oData);
			oModel.setDefaultBindingMode("OneWay");
			return oModel;
		},

		loadPatients: function(){
			var oModel = new JSONModel("./resources/patients.json");
			return oModel;
		}

	};
});
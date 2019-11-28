sap.ui.define([
	"sap/ui/model/json/JSONModel",
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageBox",
	"../model/models"
], function (JSONModel, Controller, MessageBox, models) {
	"use strict";
	const patientError = "patientError";
	const encError = "encError";
	let oResourceBundle;
	let patientId;
	let encId;

	return Controller.extend("com.cerner.dragos.urlapp.controller.PatientDetailsView", {

		showError: function (message){
			const error = oResourceBundle.getText(message);
			const id = message === patientError ? patientId : encId;
			MessageBox.alert(error + ` ${id}`);
		},

		onInit: function () {
			oResourceBundle = this.getOwnerComponent().getModel("i18n").getResourceBundle();
			const patients = this.getView().getModel("patients").getData();
			encId = jQuery.sap.getUriParameters().get("encId");
			patientId = jQuery.sap.getUriParameters().get("patientId");
			const patientMatch = patients.filter(function (p) {
				return p.id === patientId;
			});
			if (!patientMatch[0]) {
				this.byId("form").removeAllContent();
				this.showError(patientError);
				return;
			}
			const patient = new JSONModel(patientMatch[0]);
			const encounters = patient.getProperty("/encounters");
			const encounterMatch = encounters.filter(function (e) {
				return e.id === encId;
			});
			if (!encounterMatch[0]) {
				this.getView().byId("form").removeAllContent();
				this.showError(encError);
				return;
			}
			const encounter = new JSONModel(encounterMatch[0]);
			patient.setDefaultBindingMode("OneWay");
			this.getView().setModel(patient, "patient");
			encounter.setDefaultBindingMode("OneWay");
			this.getView().setModel(encounter, "encounter");

		} 
	});
});
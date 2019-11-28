/*global QUnit*/

sap.ui.define([
	"com/cerner/dragos/urlapp/controller/PatientDetailsView.controller"
], function (Controller) {
	"use strict";

	QUnit.module("PatientDetailsView Controller");

	QUnit.test("I should test the PatientDetailsView controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
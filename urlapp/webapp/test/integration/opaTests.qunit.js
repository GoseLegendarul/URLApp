/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"com/cerner/dragos/urlapp/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});
sap.ui.define([
	//"sap/m/Text" // sap/m library name
    "sap/ui/core/mvc/XMLView" // sap/ui/core/mvc library name
], function (Text) {
	"use strict";

	new Text({
		text: "Hello World"
	}).placeAt("content");

});

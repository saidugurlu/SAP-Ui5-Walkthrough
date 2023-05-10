sap.ui.define([
	//"sap/m/Text" // sap/m library name
    "sap/ui/core/mvc/XMLView" // sap/ui/core/mvc library name
], function (XMLView) {
	"use strict";

	 XMLView.create({
        viewName: "sap.ui.demo.walkthrough.view.App"
	}).then(function (oView) {
        oView.placeAt("content");
    }    ); 
});

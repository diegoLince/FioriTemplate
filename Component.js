sap.ui.define([
    "sap/ui/core/UIComponent"
], function(UIComponent) {
	"use strict";

	return UIComponent.extend("fiori.template.Component", {
        //Implementação customizada

        metadata : {
            manifest : "json"
        },

        init : function(){

            //Chama super Classe
            UIComponent.prototype.init.apply(this, arguments);
            
        },
	});
});
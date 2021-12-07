sap.ui.define([

"sap/ui/core/mvc/XMLView",
"sap/ui/core/ComponentContainer"
    
], function(XMLView, ComponentContainer) { //Os nomes são de acordo com a ordem

    'use trict';

   // XMLView.create({
     //   viewName : "fiori.template.view.App"
    //}).then(function (oView){
     //   oView.placeAt("content");
    //});

    new ComponentContainer({
        name : "fiori.template",
        settings : {
            id : "template"
        },
        async : true
    }).placeAt("content");
});
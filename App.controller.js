sap.ui.define([

	"sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel"

], function(Controller, MessageToast, JSONModel) {

	"use strict";

    return Controller.extend("fiori.template.controller.App",{
        
        //eventos padrão
        /**
         * @override
         */
        onInit: function() {
            //definindo objeto de dados
            var oMsg = {
                MsgInicial : "Seja bem Vindo!",
                Msg2 : "Seja bem Vindo!"
            };
            
            //Criar modelo json
            var oMsgModel = new JSONModel();

            oMsgModel.setData(oMsg);

            //data biding
            //Adicionar os dados na view
            var view = this.getView();
            view.setModel(oMsgModel, "messages");

            //modelo2
            //criar um novo modelo ja definido o objeto
            var oPessoaModel = new JSONModel({
                nome : "Steven",
                sobrenome : "Jobs",
                endereco : {
                    rua : "avenida renato cajado",
                    cidade : "Lapa",
                    cep : "83602627",
                    pais : "França"
                }
            });

            this.getView().setModel(oPessoaModel, "pessoa");


            //Tabela interna de dados
            var oFuncionarios = {
                Funcionarios : [
                    {
                        nome: "Renato",
                        sobrenome: "Cajado",
                        habilitado: true,
                    },
                    {
                        nome: "Bagre",
                        sobrenome: "Assado",
                        habilitado: false,
                    },
                    {
                        nome: "NINONINO",
                        sobrenome: "lambraino",
                        habilitado: true,
                    },
                    {
                        nome: "Pelé",
                        sobrenome: "loko",
                        habilitado: true,
                    },
                ]
            };

            //criar um novo modelo ja com objeto definido
            var oFunModel = new JSONModel(oFuncionarios);
            this.getView().setModel(oFunModel, "empregados");

        
        },
            
        
        //IMPLEMENTAR METODOS CUSTOMIZADOS

        onClique : function(){
            //alert("Ola pelo controller");
           // MessageToast.show("Ola message toast");

           //coletar o modelo que esta na tela
           var oModel = this.getView().getModel("messages");

           //coletar os dados do model
           var oDados = oModel.getData();

           MessageToast.show(oDados.MsgInicial);
        },

        onFuncionarioSelected : function(oEvent){

            //instancia da classe
            var oSelectedItem = oEvent.getSource();

            //Busca o contexto
            var oContext = oSelectedItem.getBindingContext("empregados");

            //Caminho do serviço
            var sPath = oContext.getPath();

            var oPanel = this.byId("detalhePanel");

            oPanel.bindElement({
                path: sPath,
                model:"empregados"
            });



        },

    });
});
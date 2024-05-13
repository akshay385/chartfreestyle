sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("liabilityreport.controller.liabilityreport", {
            onInit: function () {
                debugger
                

            },
            onAfterRendering : async function(oEvent)
            {
                this.getView().byId("vbox1").addStyleClass("vbox1")
                this.getView().byId("t1").addStyleClass("t1")
                this.getView().byId("donut1").addStyleClass("donut1")
                this.getView().byId("Flex1").addStyleClass("Flex1")
                this.getView().byId("Flex2").addStyleClass("Flex2")
                this.getView().byId("donut2").addStyleClass("donut2")
                this.getView().byId("text2").addStyleClass("text2")
                this.getView().byId("t3").addStyleClass("t3")
                this.getView().byId("hbox2").addStyleClass("hbox2");
                this.getView().byId("barChart").addStyleClass("barChart");
            }

        });
    });

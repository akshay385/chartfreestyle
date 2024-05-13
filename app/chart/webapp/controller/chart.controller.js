sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("chart.controller.chart", {
            onInit: function () {

            },
            onAfterRendering : async function(oEvent)
            {
                debugger;
                this.getView().byId("vb2").addStyleClass("vb2")
                this.getView().byId("vb1").addStyleClass("vb1")
                this.getView().byId("t2").addStyleClass("t2")
                this.getView().byId("t1").addStyleClass("t1")
                this.getView().byId("h1").addStyleClass("h1")
                this.getView().byId("don2").addStyleClass("don2")
                this.getView().byId("don1").addStyleClass("don1")
            }
        });
    });

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
                this.getView().byId("t2").addStyleClass("t1")
                this.getView().byId("t1").addStyleClass("t1")
            }
        });
    });
sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("keyprocessanalytics.controller.keyprocessanalytics", {
            onInit: function () {

            },

            onAfterRendering : async function(oEvent)
            {
                debugger;
                this.getView().byId("t1").addStyleClass("t1")
                this.getView().byId("t2").addStyleClass("t1")
                this.getView().byId("t3").addStyleClass("t1")
                this.getView().byId("barchart").addStyleClass("bar")


            }
        });
    });

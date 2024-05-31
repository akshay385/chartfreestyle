sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
function (Controller) {
    "use strict";

    return Controller.extend("keyprocessanalyticslist.controller.KeyProcessAnalyticsList", {
        onInit: function () {

        },

        onAfterRendering: async function (oEvent) {
            debugger
            this.getView().byId("t1").addStyleClass("t1")
            this.getView().byId("t2").addStyleClass("t1")
            this.getView().byId("t3").addStyleClass("t1")
            this.getView().byId("t4").addStyleClass("t1")
            this.getView().byId("t5").addStyleClass("t1")
            this.getView().byId("t1.1").addStyleClass("t1")
            this.getView().byId("t1.2").addStyleClass("t1")
            this.getView().byId("t1.3").addStyleClass("t1")
            this.getView().byId("t1.4").addStyleClass("t1")
            this.getView().byId("t1.5").addStyleClass("t1")
            this.getView().byId("t3.1").addStyleClass("t1")
            this.getView().byId("t3.12").addStyleClass("t1")
            this.getView().byId("t3.13").addStyleClass("t1")
            this.getView().byId("t3.14").addStyleClass("t1")
            this.getView().byId("t3.15").addStyleClass("t1")

        }
    });
});

sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("agingreportlist.controller.AgingReportList", {
            onInit: function () {

            },
            onAfterRendering: async function (oEvent) {
                debugger
                this.getView().byId("t3").addStyleClass("t1")
                this.getView().byId("t4").addStyleClass("t1")
                this.getView().byId("t5").addStyleClass("t1")
                this.getView().byId("t6").addStyleClass("t1")
                this.getView().byId("t7").addStyleClass("t1")
                this.getView().byId("t3.1").addStyleClass("t1")
                this.getView().byId("t4.1").addStyleClass("t1")
                this.getView().byId("t5.1").addStyleClass("t1")
                this.getView().byId("t6.1").addStyleClass("t1")
                this.getView().byId("t7.1").addStyleClass("t1")
                this.getView().byId("t3.2").addStyleClass("t1")
                this.getView().byId("t4.2").addStyleClass("t1")
                this.getView().byId("t5.2").addStyleClass("t1")
                this.getView().byId("t6.2").addStyleClass("t1")
                this.getView().byId("t8.2").addStyleClass("t1")
                this.getView().byId("t9.2").addStyleClass("t1")
                this.getView().byId("t10.2").addStyleClass("t1")
                this.getView().byId("t11.2").addStyleClass("t1")
                this.getView().byId("t12.2").addStyleClass("t1")
            }
        });
    });

sap.ui.define([
    "sap/m/MessageToast"
], function(MessageToast) {
    'use strict';

    return {
        chart: function(oEvent) {
            MessageToast.show("Custom handler invoked.");
        }
    };
});

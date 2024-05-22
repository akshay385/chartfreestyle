sap.ui.define([
    "sap/ui/core/mvc/Controller",
    'sap/ui/model/json/JSONModel',
	'sap/ui/export/library',
	'sap/ui/export/Spreadsheet',
	'sap/m/MessageToast'
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,JSONModel, exportLibrary, Spreadsheet, MessageToast) {
        "use strict";
        var EdmType = exportLibrary.EdmType
        return Controller.extend("invoicesummarylist.controller.InvoiceSummaryList", {
            onInit: function () {

            },
            butt : async function(oEvent)
            {
                debugger;
            },

            createColumnConfig: function() {
                return  [
                    {
                        label : 'Invoice No',
                        property : 'Invoice_No',
                        type : EdmType.String
                    },
                    {
                        label : 'Vendor Name',
                        property : 'Vendor_name',
                        type : EdmType.String
                    },
                    {
                        label : 'Vendor No',
                        property : 'Vendor_No',
                        type : EdmType.String
                    },
                    {
                        label : 'Document Type',
                        property : 'Document_Type',
                        type : EdmType.String
                    },
                    {
                        label : 'Overdue_Flag',
                        property : 'Overdue_Flag',
                        type : EdmType.String
                    },
                    {
                        label : 'Invoice Status',
                        property : 'Invoice_Status',
                        type : EdmType.String
                    },
                    {
                        label : 'Amount',
                        property : 'Amount',
                        type : EdmType.String
                    },
                    {
                        label : 'Invoice Date',
                        property : 'Invoice_Date',
                        type : EdmType.String
                    },
                    {
                        label : 'Due Date',
                        property : 'Due_Date',
                        type : EdmType.String
                    },
                    {
                        label : 'Payment Terms',
                        property : 'Payment_Terms',
                        type : EdmType.String
                    },
                    {
                        label : 'Days to Due',
                        property : 'Days_to_Due',
                        type : EdmType.String
                    },
                    {
                        label : 'Ref Po No',
                        property : 'Ref_Po_No',
                        type : EdmType.String
                    },
                    {
                        label : 'Comp Code',
                        property : 'Comp_Code',
                        type : EdmType.String
                    },
                    {
                        label : 'Ap Processor',
                        property : 'Ap_Processor',
                        type : EdmType.String
                    },
                    {
                        label : 'Approvers',
                        property : 'Approvers',
                        type : EdmType.String
                    },
                    {
                        label : 'Start Date',
                        property : 'Start_Date',
                        type : EdmType.String
                    },
                    {
                        label : 'End Date',
                        property : 'End_Date',
                        type : EdmType.String
                    },
                    {
                        label : 'Process Duration',
                        property : 'Process_Duration',
                        type : EdmType.String
                    }
                ]
            },
            down : async function(oEvent)
            {
                var aCols,oTable,oBinding,oSettings,oSheet;
                debugger;
                oTable = this.byId('idProductsTable');
                oBinding = oTable.getBinding('items');
                aCols =  this.createColumnConfig();
                console.log();

                oSettings = {
                    workbook: { columns: aCols },
                    dataSource: oBinding
                }

                oSheet = new Spreadsheet(oSettings);
			oSheet.build()
				.then(function() {
					MessageToast.show('Spreadsheet export has finished');
				}).finally(function() {
					oSheet.destroy();
				});


            }
        });
    });

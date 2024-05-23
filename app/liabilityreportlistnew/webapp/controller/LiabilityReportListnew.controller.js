sap.ui.define([
    "sap/ui/core/mvc/Controller",
    'sap/ui/model/json/JSONModel',
	'sap/ui/export/library',
	'sap/ui/export/Spreadsheet',
	'sap/m/MessageToast',
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,JSONModel, exportLibrary, Spreadsheet, MessageToast) {
        "use strict";
        var EdmType = exportLibrary.EdmType

        return Controller.extend("liabilityreportlistnew.controller.LiabilityReportListnew", {
            onInit: function () {
                    
            },
            onAfterRendering : async function(oEvent)
            {
                this.getView().byId("t1").addStyleClass("t1")
                this.getView().byId("t2").addStyleClass("t1")
                this.getView().byId("t3").addStyleClass("t1")
                this.getView().byId("t4").addStyleClass("t1")
                this.getView().byId("t5").addStyleClass("t1")
                this.getView().byId("t6").addStyleClass("t1")
                this.getView().byId("t8").addStyleClass("t1")
                this.getView().byId("t9").addStyleClass("t1")
                this.getView().byId("t10").addStyleClass("t1")
                this.getView().byId("t11").addStyleClass("t1")
                this.getView().byId("t12").addStyleClass("t1")

                
                
                

            },

            createColumn : function()
            {
                return [
                    {
                        label : 'Vendor No',
                        property : 'Vendor_no',
                        type : EdmType.String
                    },
                    {
                        label : 'Comp Code',
                        property : 'comp_code',
                        type : EdmType.String
                    },
                    {
                        label : 'Total No Of Invoice',
                        property : 'Total_no_of_invoice',
                        type : EdmType.String
                    },
                    {
                        label : 'Total Amount',
                        property : 'Total_Amount',
                        type : EdmType.String
                    },
                    {
                        label : 'Total No Of Invoice Due',
                        property : 'Total_no_of_invoice',
                        type : EdmType.String
                    },
                    {
                        label : 'Total Due Amount',
                        property : 'Total_Due_Amount',
                        type : EdmType.String
                    },
                    {
                        label : 'Total No Of Invoice OverDue',
                        property : 'Total_no_of_Invoice_OverDue',
                        type : EdmType.String
                    },
                    {
                        label : 'Total Overdue Amount',
                        property : 'Total_Overdue_Amount',
                        type : EdmType.String
                    },
                    {
                        label : 'Total_No_of_Invoice_Posted',
                        property : 'Total_No_of_Invoice_Posted',
                        type : EdmType.String
                    },
                    {
                        label : 'Total Amount Posted',
                        property : 'Total_amt_Posted',
                        type : EdmType.String
                    }
                ]
            },
            
            down : async function()
            {
                debugger;
                var aCols,oTable,oBinding,oSettings,oSheet;
                debugger;
                oTable = this.byId('idProductsTable1');
                oBinding = oTable.getBinding('items');
                aCols =  this.createColumn();

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

            },

            onselectchange : async function(oEvent) 
            {
                debugger
                console.log();

            }

        });
    });

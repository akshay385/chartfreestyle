sap.ui.define(["sap/ui/core/mvc/Controller","sap/ui/model/json/JSONModel","sap/ui/export/library","sap/ui/export/Spreadsheet","sap/m/MessageToast"],function(e,t,i,r,s){"use strict";var a=i.EdmType;return e.extend("invoicesummarylist.controller.InvoiceSummaryList",{onInit:function(){},onAfterRendering:async function(e){debugger;this.getView().byId("t1").addStyleClass("t1");this.getView().byId("t2").addStyleClass("t1");this.getView().byId("t3").addStyleClass("t1");this.getView().byId("t4").addStyleClass("t1");this.getView().byId("t5").addStyleClass("t1");this.getView().byId("t6").addStyleClass("t1");this.getView().byId("t7").addStyleClass("t1");this.getView().byId("t8").addStyleClass("t1");this.getView().byId("t9").addStyleClass("t1");this.getView().byId("t10").addStyleClass("t1");this.getView().byId("t11").addStyleClass("t1");this.getView().byId("t12").addStyleClass("t1");this.getView().byId("t13").addStyleClass("t1");this.getView().byId("t14").addStyleClass("t1");this.getView().byId("t15").addStyleClass("t1");this.getView().byId("t16").addStyleClass("t1");this.getView().byId("t17").addStyleClass("t1");this.getView().byId("t18").addStyleClass("t1")},butt:async function(e){debugger},createColumnConfig:function(){return[{label:"Invoice No",property:"Invoice_No",type:a.String},{label:"Vendor Name",property:"Vendor_name",type:a.String},{label:"Vendor No",property:"Vendor_No",type:a.String},{label:"Document Type",property:"Document_Type",type:a.String},{label:"Overdue_Flag",property:"Overdue_Flag",type:a.String},{label:"Invoice Status",property:"Invoice_Status",type:a.String},{label:"Amount",property:"Amount",type:a.String},{label:"Invoice Date",property:"Invoice_Date",type:a.String},{label:"Due Date",property:"Due_Date",type:a.String},{label:"Payment Terms",property:"Payment_Terms",type:a.String},{label:"Days to Due",property:"Days_to_Due",type:a.String},{label:"Ref Po No",property:"Ref_Po_No",type:a.String},{label:"Comp Code",property:"Comp_Code",type:a.String},{label:"Ap Processor",property:"Ap_Processor",type:a.String},{label:"Approvers",property:"Approvers",type:a.String},{label:"Start Date",property:"Start_Date",type:a.String},{label:"End Date",property:"End_Date",type:a.String},{label:"Process Duration",property:"Process_Duration",type:a.String}]},down:async function(e){var t,i,a,o,l;debugger;i=this.byId("idProductsTable");a=i.getBinding("items");t=this.createColumnConfig();console.log();o={workbook:{columns:t},dataSource:a};l=new r(o);l.build().then(function(){s.show("Spreadsheet export has finished")}).finally(function(){l.destroy()})},search:function(){debugger;var e=this.getView().byId("combo1").getSelectedKeys();var t=this.getView().byId("combo2").getSelectedKeys();var i=this.getView().byId("idProductsTable");var r=i.getBinding("items");if(t.length>0){var s=new sap.m.BusyDialog({text:`Fetching Vendor name with ${t}`});s.open();var a=new sap.ui.model.Filter({filters:[new sap.ui.model.Filter("Vendor_name",sap.ui.model.FilterOperator.Contains,t)],and:false});r.filter([a]);setTimeout(function(){s.close()},1e3)}else if(e.length>0){var o=new sap.m.BusyDialog({text:`Fetching Invoice No with ${e}`});o.open();var l=new sap.ui.model.Filter({filters:[new sap.ui.model.Filter("Invoice_No",sap.ui.model.FilterOperator.Contains,e)],and:false});r.filter([l]);setTimeout(function(){o.close()},1e3)}else{var n=new sap.m.BusyDialog({text:"Fetching All Data"});n.open();r.filter([]);setTimeout(function(){n.close()},1e3)}},onLogoPressed:function(){var e=this.getView().byId("f1");var t=e.getVisible();e.setVisible(!t)}})});
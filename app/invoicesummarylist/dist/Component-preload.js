//@ui5-bundle invoicesummarylist/Component-preload.js
jQuery.sap.registerPreloadedModules({
"version":"2.0",
"modules":{
	"invoicesummarylist/Component.js":function(){sap.ui.define(["sap/ui/core/UIComponent","sap/ui/Device","invoicesummarylist/model/models"],function(e,i,t){"use strict";return e.extend("invoicesummarylist.Component",{metadata:{manifest:"json"},init:function(){e.prototype.init.apply(this,arguments);this.getRouter().initialize();this.setModel(t.createDeviceModel(),"device")}})});
},
	"invoicesummarylist/controller/App.controller.js":function(){sap.ui.define(["sap/ui/core/mvc/Controller"],function(n){"use strict";return n.extend("invoicesummarylist.controller.App",{onInit:function(){}})});
},
	"invoicesummarylist/controller/InvoiceSummaryList.controller.js":function(){sap.ui.define(["sap/ui/core/mvc/Controller","sap/ui/model/json/JSONModel","sap/ui/export/library","sap/ui/export/Spreadsheet","sap/m/MessageToast"],function(e,t,i,r,s){"use strict";var a=i.EdmType;return e.extend("invoicesummarylist.controller.InvoiceSummaryList",{onInit:function(){},onAfterRendering:async function(e){debugger;this.getView().byId("t1").addStyleClass("t1");this.getView().byId("t2").addStyleClass("t1");this.getView().byId("t3").addStyleClass("t1");this.getView().byId("t4").addStyleClass("t1");this.getView().byId("t5").addStyleClass("t1");this.getView().byId("t6").addStyleClass("t1");this.getView().byId("t7").addStyleClass("t1");this.getView().byId("t8").addStyleClass("t1");this.getView().byId("t9").addStyleClass("t1");this.getView().byId("t10").addStyleClass("t1");this.getView().byId("t11").addStyleClass("t1");this.getView().byId("t12").addStyleClass("t1");this.getView().byId("t13").addStyleClass("t1");this.getView().byId("t14").addStyleClass("t1");this.getView().byId("t15").addStyleClass("t1");this.getView().byId("t16").addStyleClass("t1");this.getView().byId("t17").addStyleClass("t1");this.getView().byId("t18").addStyleClass("t1")},butt:async function(e){debugger},createColumnConfig:function(){return[{label:"Invoice No",property:"Invoice_No",type:a.String},{label:"Vendor Name",property:"Vendor_name",type:a.String},{label:"Vendor No",property:"Vendor_No",type:a.String},{label:"Document Type",property:"Document_Type",type:a.String},{label:"Overdue_Flag",property:"Overdue_Flag",type:a.String},{label:"Invoice Status",property:"Invoice_Status",type:a.String},{label:"Amount",property:"Amount",type:a.String},{label:"Invoice Date",property:"Invoice_Date",type:a.String},{label:"Due Date",property:"Due_Date",type:a.String},{label:"Payment Terms",property:"Payment_Terms",type:a.String},{label:"Days to Due",property:"Days_to_Due",type:a.String},{label:"Ref Po No",property:"Ref_Po_No",type:a.String},{label:"Comp Code",property:"Comp_Code",type:a.String},{label:"Ap Processor",property:"Ap_Processor",type:a.String},{label:"Approvers",property:"Approvers",type:a.String},{label:"Start Date",property:"Start_Date",type:a.String},{label:"End Date",property:"End_Date",type:a.String},{label:"Process Duration",property:"Process_Duration",type:a.String}]},down:async function(e){var t,i,a,o,l;debugger;i=this.byId("idProductsTable");a=i.getBinding("items");t=this.createColumnConfig();console.log();o={workbook:{columns:t},dataSource:a};l=new r(o);l.build().then(function(){s.show("Spreadsheet export has finished")}).finally(function(){l.destroy()})},search:function(){debugger;var e=this.getView().byId("combo1").getSelectedKeys();var t=this.getView().byId("combo2").getSelectedKeys();var i=this.getView().byId("idProductsTable");var r=i.getBinding("items");if(t.length>0){var s=new sap.m.BusyDialog({text:`Fetching Vendor name with ${t}`});s.open();var a=new sap.ui.model.Filter({filters:[new sap.ui.model.Filter("Vendor_name",sap.ui.model.FilterOperator.Contains,t)],and:false});r.filter([a]);setTimeout(function(){s.close()},1e3)}else if(e.length>0){var o=new sap.m.BusyDialog({text:`Fetching Invoice No with ${e}`});o.open();var l=new sap.ui.model.Filter({filters:[new sap.ui.model.Filter("Invoice_No",sap.ui.model.FilterOperator.Contains,e)],and:false});r.filter([l]);setTimeout(function(){o.close()},1e3)}else{var n=new sap.m.BusyDialog({text:"Fetching All Data"});n.open();r.filter([]);setTimeout(function(){n.close()},1e3)}},onLogoPressed:function(){var e=this.getView().byId("f1");var t=e.getVisible();e.setVisible(!t)}})});
},
	"invoicesummarylist/i18n/i18n.properties":'# This is the resource bundle for invoicesummarylist\n\n#Texts for manifest.json\n\n#XTIT: Application name\nappTitle=InvoiceSummaryList page\n\n#YDES: Application description\nappDescription=An SAP Fiori application.\n#XTIT: Main view title\ntitle=InvoiceSummaryList page',
	"invoicesummarylist/manifest.json":'{"_version":"1.59.0","sap.app":{"id":"invoicesummarylist","type":"application","i18n":"i18n/i18n.properties","applicationVersion":{"version":"0.0.1"},"title":"{{appTitle}}","description":"{{appDescription}}","resources":"resources.json","sourceTemplate":{"id":"@sap/generator-fiori:basic","version":"1.13.4","toolsId":"01de40c9-fa14-466f-9aed-e80413fcfa54"},"dataSources":{"mainService":{"uri":"odata/v4/catalog/","type":"OData","settings":{"annotations":[],"odataVersion":"4.0"}}}},"sap.ui":{"technology":"UI5","icons":{"icon":"","favIcon":"","phone":"","phone@2":"","tablet":"","tablet@2":""},"deviceTypes":{"desktop":true,"tablet":true,"phone":true}},"sap.ui5":{"flexEnabled":true,"dependencies":{"minUI5Version":"1.124.0","libs":{"sap.m":{},"sap.ui.core":{},"sap.f":{},"sap.suite.ui.generic.template":{},"sap.ui.comp":{},"sap.ui.generic.app":{},"sap.ui.table":{},"sap.ushell":{}}},"contentDensities":{"compact":true,"cozy":true},"models":{"i18n":{"type":"sap.ui.model.resource.ResourceModel","settings":{"bundleName":"invoicesummarylist.i18n.i18n"}},"":{"dataSource":"mainService","preload":true,"settings":{"synchronizationMode":"None","operationMode":"Server","autoExpandSelect":true,"earlyRequests":true}}},"resources":{"css":[{"uri":"css/style.css"}]},"routing":{"config":{"routerClass":"sap.m.routing.Router","viewType":"XML","async":true,"viewPath":"invoicesummarylist.view","controlAggregation":"pages","controlId":"app","clearControlAggregation":false},"routes":[{"name":"RouteInvoiceSummaryList","pattern":":?query:","target":["TargetInvoiceSummaryList"]}],"targets":{"TargetInvoiceSummaryList":{"viewType":"XML","transition":"slide","clearControlAggregation":false,"viewId":"InvoiceSummaryList","viewName":"InvoiceSummaryList"}}},"rootView":{"viewName":"invoicesummarylist.view.App","type":"XML","async":true,"id":"App"}},"sap.cloud":{"public":true,"service":"reportapprouter"}}',
	"invoicesummarylist/model/models.js":function(){sap.ui.define(["sap/ui/model/json/JSONModel","sap/ui/Device"],function(e,n){"use strict";return{createDeviceModel:function(){var i=new e(n);i.setDefaultBindingMode("OneWay");return i}}});
},
	"invoicesummarylist/view/App.view.xml":'<mvc:View controllerName="invoicesummarylist.controller.App"\n    xmlns:html="http://www.w3.org/1999/xhtml"\n    xmlns:mvc="sap.ui.core.mvc" displayBlock="true"\n    xmlns="sap.m"><App id="app"></App></mvc:View>\n',
	"invoicesummarylist/view/InvoiceSummaryList.view.xml":'<mvc:View xmlns:core="sap.ui.core" xmlns:tnt="sap.tnt" xmlns:smartvariants="sap.ui.comp.smartvariants" xmlns:filterbar="sap.ui.comp.filterbar" xmlns:f="sap.f" controllerName="invoicesummarylist.controller.InvoiceSummaryList"\n    xmlns:mvc="sap.ui.core.mvc" displayBlock="true"\n    xmlns="sap.m"><Page id="page"><tnt:ToolHeader id="tool" class="toolhead"><Button icon="sap-icon://menu2" id="b1" press="onLogoPressed" type="Transparent" tooltip="Menu"><layoutData><OverflowToolbarLayoutData priority="NeverOverflow" id="toolbar"></OverflowToolbarLayoutData></layoutData></Button><Image src="./img/logo.png" id="img" decorative="false" tooltip="SAP Logo"></Image><Title text="Report" id="t" wrapping="false"></Title></tnt:ToolHeader><f:DynamicPageHeader backgroundDesign="Translucent" id="filter"><VBox class="box" id="vb1"><filterbar:FilterBar useToolbar="false" id="f1" search="search" filterBarExpanded="true" isRunningInValueHelpDialog="true" advancedMode="true" showGoOnFB="true" showAllFilters="true" ><filterbar:filterGroupItems><filterbar:FilterGroupItem id="filter1"  name="Invoice No" label="Invoice No" groupName="Group1" visibleInFilterBar="true"><filterbar:control><MultiComboBox id="combo1" \n\t\t  name="Invoice_No" selectionChange="onselectchange"\n\t\t   items="{\n                    path: \'/Invoice1\',\n                    templateShareable: true\n                }"\n\t\t  ><core:Item id="core1" key="{Invoice_No}" text="{Invoice_No}"></core:Item></MultiComboBox></filterbar:control></filterbar:FilterGroupItem><filterbar:FilterGroupItem id="filgroup" name="Vendor Name" label="Vendor Name" groupName="Group2" visibleInFilterBar="true"><filterbar:control><MultiComboBox id="combo2"\n\t\t  name="Vendor_name" selectionChange="onselectchange1"\n\t\t   items="{\n                    path: \'/Invoice1\',\n                    templateShareable: true\n                }"\n\t\t  ><core:Item id="core2" key="{Vendor_name}" text="{Vendor_name}"></core:Item></MultiComboBox></filterbar:control></filterbar:FilterGroupItem></filterbar:filterGroupItems></filterbar:FilterBar></VBox></f:DynamicPageHeader><FlexBox id="demo" justifyContent="End" class="customButtonSpacing" width="100%"><Button icon="sap-icon://download" id="down" text="Download All Reports" press="down"></Button><Button text="Chart" icon="sap-icon://donut-chart" press="butt" id="btn" class="sapUiTinyMarginEnd"/></FlexBox><ScrollContainer horizontal="true" vertical="true" height="100%" id="cont1"><Table class="tableCLass" width="250%" id="idProductsTable" inset="true" items="{\n\t\t\tpath: \'/Invoice1\'\n\t\t}"><columns ><Column width="12em"  styleClass="col" id="col1"><Text text="Invoice No" id="t1" /></Column><Column width="12em" styleClass="col" id="col2"><Text text="Vendor Name" id="t2" /></Column><Column width="12em" styleClass="col" id="col3"><Text text="Vendor No" id="t3"/></Column><Column width="12em" styleClass="col" id="col4"><Text text="Document Type" id="t4" /></Column><Column width="12em" styleClass="col" id="col5"><Text text="Overdue Flag" id="t5"  /></Column><Column width="12em" styleClass="col"  id="col6"><Text text="Invoice Status" id="t6" /></Column><Column width="12em" styleClass="col" id="col7"><Text text="Amount" id="t7"/></Column><Column width="12em" styleClass="col" id="col8"><Text text="Invoice Date" id="t8" /></Column><Column width="12em" styleClass="col" id="col9"><Text text="Due Date" id="t9" /></Column><Column width="12em" styleClass="col" id="col10"><Text text="Payment Terms" id="t10"/></Column><Column width="12em" styleClass="col" id="col11"><Text text="Days to Due" id="t11"/></Column><Column width="12em" styleClass="col" id="col12"><Text text="Ref Po No" id="t12" /></Column><Column width="12em" styleClass="col" id="col13"><Text text="Comp Code" id="t13" /></Column><Column width="12em" styleClass="col" id="col14"><Text text="Comp Code" id="t14" /></Column><Column width="12em" styleClass="col" id="col15"><Text text="Approvers" id="t15"/></Column><Column width="12em" styleClass="col" id="col16"><Text text="Start Date" id="t16" /></Column><Column width="12em" styleClass="col" id="col17"><Text text="End Date" id="t17"/></Column><Column width="12em" styleClass="col" id="col18"><Text text="Process Duration" id="t18" /></Column></columns><items><ColumnListItem vAlign="Middle" id="cli"><cells><ObjectIdentifier id="o1" title="{Invoice_No}" /><ObjectIdentifier id="o2" title="{Vendor_name}" /><ObjectIdentifier id="o3" title="{Vendor_No}" /><ObjectIdentifier id="o4" title="{Document_Type}"  /><ObjectStatus id="o5" title="{Overdue_Flag}" icon="sap-icon://flag" state="Success"/><ObjectIdentifier id="o6" title="{Invoice_Status}" /><ObjectIdentifier id="o7" title="{Amount}" /><ObjectIdentifier  id="o8" title="{Invoice_Date}" /><ObjectIdentifier id="o9" title="{Due_Date}" /><ObjectIdentifier id="o10" title="{Payment_Terms}" /><ObjectStatus id="o11" title="{Days_to_Due}" icon="sap-icon://validate" state="Success"/><ObjectIdentifier id="o12" title="{Ref_Po_No}" /><ObjectIdentifier id="o13" title="{Comp_Code}" /><ObjectIdentifier id="o14" title="{Ap_Processor}" /><ObjectIdentifier id="o15" title="{Approvers}" /><ObjectIdentifier id="o16" title="{Start_Date}" /><ObjectIdentifier id="o17" title="{End_Date}" /><ObjectIdentifier id="o18" title="{Process_Duration}" /></cells></ColumnListItem></items></Table></ScrollContainer><content /></Page></mvc:View>\n'
}});
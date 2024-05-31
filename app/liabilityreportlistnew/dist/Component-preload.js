//@ui5-bundle liabilityreportlistnew/Component-preload.js
jQuery.sap.registerPreloadedModules({
"version":"2.0",
"modules":{
	"liabilityreportlistnew/Component.js":function(){sap.ui.define(["sap/ui/core/UIComponent","sap/ui/Device","liabilityreportlistnew/model/models"],function(e,i,t){"use strict";return e.extend("liabilityreportlistnew.Component",{metadata:{manifest:"json"},init:function(){e.prototype.init.apply(this,arguments);this.getRouter().initialize();this.setModel(t.createDeviceModel(),"device")}})});
},
	"liabilityreportlistnew/controller/App.controller.js":function(){sap.ui.define(["sap/ui/core/mvc/Controller"],function(n){"use strict";return n.extend("liabilityreportlistnew.controller.App",{onInit:function(){}})});
},
	"liabilityreportlistnew/controller/LiabilityReportListnew.controller.js":function(){sap.ui.define(["sap/ui/core/mvc/Controller","sap/ui/model/json/JSONModel","sap/ui/export/library","sap/ui/export/Spreadsheet","sap/m/MessageToast","sap/ui/model/Filter","sap/ui/model/FilterOperator"],function(e,t,o,i,a,l){"use strict";var n=sap.ui.export.EdmType;return e.extend("liabilityreportlistnew.controller.LiabilityReportListnew",{onInit:function(){},onAfterRendering:async function(e){this.getView().byId("t1").addStyleClass("t1");this.getView().byId("t2").addStyleClass("t1");this.getView().byId("t3").addStyleClass("t1");this.getView().byId("t4").addStyleClass("t1");this.getView().byId("t5").addStyleClass("t1");this.getView().byId("t6").addStyleClass("t1");this.getView().byId("t8").addStyleClass("t1");this.getView().byId("t9").addStyleClass("t1");this.getView().byId("t10").addStyleClass("t1");this.getView().byId("t11").addStyleClass("t1");this.getView().byId("t12").addStyleClass("t1");this.oFilterBar=this.getView().byId("f1")},createColumn:function(){return[{label:"Vendor No",property:"Vendor_no",type:n.String},{label:"Comp Code",property:"comp_code",type:n.String},{label:"Total No Of Invoice",property:"Total_no_of_invoice",type:n.String},{label:"Total Amount",property:"Total_Amount",type:n.String},{label:"Total No Of Invoice Due",property:"Total_no_of_invoice",type:n.String},{label:"Total Due Amount",property:"Total_Due_Amount",type:n.String},{label:"Total No Of Invoice OverDue",property:"Total_no_of_Invoice_OverDue",type:n.String},{label:"Total Overdue Amount",property:"Total_Overdue_Amount",type:n.String},{label:"Total_No_of_Invoice_Posted",property:"Total_No_of_Invoice_Posted",type:n.String},{label:"Total Amount Posted",property:"Total_amt_Posted",type:n.String}]},down:async function(){debugger;var e,t,o,i,a;debugger;t=this.byId("idProductsTable1");o=t.getBinding("items");e=this.createColumn();i={workbook:{columns:e},dataSource:o};a=new sap.ui.export.Spreadsheet(i);a.build().then(function(){l.show("Spreadsheet export has finished")}).finally(function(){a.destroy()})},onselectchange:async function(e){debugger;console.log();this.oFilterBar.fireFilterChange(e)},pressbut:async function(e){debugger;var t=this.getView().byId("f1");var o=t.getVisible();t.setVisible(!o)},search:async function(e){debugger;var t=this.getView().byId("combo1").getSelectedKeys();var o=this.getView().byId("combo2").getSelectedKeys();var i=this.getView().byId("idProductsTable1");var a=i.getBinding("items");if(o.length>0){var l=new sap.m.BusyDialog({text:`Fetching Vendor Name with ${o}`});l.open();var n=new sap.ui.model.Filter({filters:[new sap.ui.model.Filter("vendor_name",sap.ui.model.FilterOperator.Contains,o)],and:false});a.filter([n]);setTimeout(function(){l.close()},1e3)}else if(t.length>0){var r=new sap.m.BusyDialog({text:`Fetching Vendor No with ${t}`});r.open();var s=new sap.ui.model.Filter({filters:[new sap.ui.model.Filter("Vendor_no",sap.ui.model.FilterOperator.Contains,t)],and:false});a.filter([s]);setTimeout(function(){r.close()},1e3)}else{var d=new sap.m.BusyDialog({text:"Fetching All Data"});d.open();a.filter([]);setTimeout(function(){d.close()},1e3)}}})});
},
	"liabilityreportlistnew/i18n/i18n.properties":'# This is the resource bundle for liabilityreportlistnew\n\n#Texts for manifest.json\n\n#XTIT: Application name\nappTitle=LiabilityReportList\n\n#YDES: Application description\nappDescription=An SAP Fiori application.\n#XTIT: Main view title\ntitle=LiabilityReportList\n\n#XFLD,63\nflpTitle=Liability Report List\n',
	"liabilityreportlistnew/manifest.json":'{"_version":"1.59.0","sap.app":{"id":"liabilityreportlistnew","type":"application","i18n":"i18n/i18n.properties","applicationVersion":{"version":"0.0.1"},"title":"{{appTitle}}","description":"{{appDescription}}","resources":"resources.json","sourceTemplate":{"id":"@sap/generator-fiori:basic","version":"1.13.4","toolsId":"1c275716-7ac5-4ded-8c06-64c7aaaab063"},"dataSources":{"mainService":{"uri":"odata/v4/catalog/","type":"OData","settings":{"annotations":[],"odataVersion":"4.0"}}},"crossNavigation":{"inbounds":{"LiabilityReportListnew-display":{"semanticObject":"LiabilityReportListnew","action":"display","title":"{{flpTitle}}","signature":{"parameters":{},"additionalParameters":"allowed"}}}}},"sap.ui":{"technology":"UI5","icons":{"icon":"","favIcon":"","phone":"","phone@2":"","tablet":"","tablet@2":""},"deviceTypes":{"desktop":true,"tablet":true,"phone":true}},"sap.ui5":{"flexEnabled":true,"dependencies":{"minUI5Version":"1.124.0","libs":{"sap.m":{},"sap.ui.core":{},"sap.f":{},"sap.suite.ui.generic.template":{},"sap.ui.comp":{},"sap.ui.generic.app":{},"sap.ui.table":{},"sap.ushell":{}}},"contentDensities":{"compact":true,"cozy":true},"models":{"i18n":{"type":"sap.ui.model.resource.ResourceModel","settings":{"bundleName":"liabilityreportlistnew.i18n.i18n"}},"":{"dataSource":"mainService","preload":true,"settings":{"synchronizationMode":"None","operationMode":"Server","autoExpandSelect":true,"earlyRequests":true}}},"resources":{"css":[{"uri":"css/style.css"}]},"routing":{"config":{"routerClass":"sap.m.routing.Router","viewType":"XML","async":true,"viewPath":"liabilityreportlistnew.view","controlAggregation":"pages","controlId":"app","clearControlAggregation":false},"routes":[{"name":"RouteLiabilityReportListnew","pattern":":?query:","target":["TargetLiabilityReportListnew"]}],"targets":{"TargetLiabilityReportListnew":{"viewType":"XML","transition":"slide","clearControlAggregation":false,"viewId":"LiabilityReportListnew","viewName":"LiabilityReportListnew"}}},"rootView":{"viewName":"liabilityreportlistnew.view.App","type":"XML","async":true,"id":"App"}},"sap.cloud":{"public":true,"service":"reportapprouter"}}',
	"liabilityreportlistnew/model/models.js":function(){sap.ui.define(["sap/ui/model/json/JSONModel","sap/ui/Device"],function(e,n){"use strict";return{createDeviceModel:function(){var i=new e(n);i.setDefaultBindingMode("OneWay");return i}}});
},
	"liabilityreportlistnew/view/App.view.xml":'<mvc:View controllerName="liabilityreportlistnew.controller.App"\n    xmlns:html="http://www.w3.org/1999/xhtml"\n    xmlns:mvc="sap.ui.core.mvc" displayBlock="true"\n    xmlns="sap.m"><App id="app"></App></mvc:View>\n',
	"liabilityreportlistnew/view/LiabilityReportListnew.view.xml":'<mvc:View xmlns:smarttable="sap.ui.comp.smarttable" xmlns:smartfilterbar="sap.ui.comp.smartfilterbar" xmlns:smartvariants="sap.ui.comp.smartvariants" xmlns:core="sap.ui.core" xmlns:filterbar="sap.ui.comp.filterbar" xmlns:f="sap.f" xmlns:tnt="sap.tnt" controllerName="liabilityreportlistnew.controller.LiabilityReportListnew"\n    xmlns:mvc="sap.ui.core.mvc" displayBlock="true"\n    xmlns="sap.m"><Page id="page"><tnt:ToolHeader id="tool" class="toolhead"><Button icon="sap-icon://menu2" id="b1" press="pressbut" type="Transparent" tooltip="Menu"><layoutData><OverflowToolbarLayoutData priority="NeverOverflow" id="toolbar"></OverflowToolbarLayoutData></layoutData></Button><Image src="./img/logo.png" id="img" decorative="false" press="onLogoPressed" tooltip="SAP Logo"></Image><Title text="Liability Report" id="t" wrapping="false"></Title></tnt:ToolHeader><f:DynamicPageHeader backgroundDesign="Translucent" id="filter"><VBox class="box" id="vb1"><filterbar:FilterBar  useToolbar="false" id="f1" visible="true" search="search"  filterBarExpanded="true" isRunningInValueHelpDialog="true" advancedMode="true" showGoOnFB="true" showAllFilters="true"><filterbar:filterGroupItems><filterbar:FilterGroupItem id="filter1" name="Invoice No" label="Vendor No" groupName="Group1" visibleInFilterBar="true"><filterbar:control><MultiComboBox id="combo1" name="Name" selectionChange="onselectchange"\n                items="{\n                    path: \'/Liability_list\',\n                    templateShareable: true\n                }"\n                ><core:Item id="core1" key="{Vendor_no}" text="{Vendor_no}"></core:Item></MultiComboBox></filterbar:control></filterbar:FilterGroupItem><filterbar:FilterGroupItem id="filgroup" name="Vendor Name" label="Vendor Name" groupName="Group2" visibleInFilterBar="true"><filterbar:control><MultiComboBox id="combo2"\n\t\t  name="Vendor Name" selectionChange="onselectchange1"\n          items="{\n             path: \'/Liability_list\',\n            templateShareable: true\n          }"><core:Item id="core2" key="{vendor_name}" text="{vendor_name}"></core:Item></MultiComboBox></filterbar:control></filterbar:FilterGroupItem></filterbar:filterGroupItems></filterbar:FilterBar></VBox></f:DynamicPageHeader><FlexBox id="demo" justifyContent="End" class="customButtonSpacing" width="100%"><Button icon="sap-icon://download" id="down" text="Download All Reports" press="down"></Button><Button text="Chart" icon="sap-icon://donut-chart" press="butt" id="btn" class="sapUiTinyMarginEnd"/></FlexBox><ScrollContainer  horizontal="true" vertical="true" height="100%" id="cont1"><Table class="tableCLass" width="250%" id="idProductsTable1" inset="true" items="{\n\t\t\tpath: \'/Liability_list\'\n\t\t}"><columns><Column width="12em"  styleClass="col" id="col1"><Text text="VENDOR NAME" id="t1"/></Column><Column width="12em"  styleClass="col" id="col2"><Text text="VENDOR NO" id="t2"/></Column><Column width="12em"  styleClass="col" id="col3"><Text text="COMP CODE" id="t3" /></Column><Column width="12em"  styleClass="col" id="col4"><Text text="TOTAL NO OF INVOICE" id="t4" /></Column><Column width="12em"  styleClass="col" id="col5"><Text text="TOTAL AMOUNT" id="t5" /></Column><Column width="12em"  styleClass="col" id="col6"><Text text="TOTAL NO OF INVOICE DUE" id="t6" /></Column><Column width="12em"  styleClass="col" id="col8"><Text text="TOTAL DUE AMOUNT" id="t8" /></Column><Column width="12em"  styleClass="col" id="col9"><Text text="TOTAL NO OF INVOICE OVERDUE" id="t9" /></Column><Column width="12em"  styleClass="col" id="col10"><Text text="TOTAL OVERDUE AMOUNT" id="t10" /></Column><Column width="12em"  styleClass="col" id="col11"><Text text="TOTAL NO OF INVOICE POSTED" id="t11" /></Column><Column width="12em"  styleClass="col" id="col12"><Text text="TOTAL AMOUNT POSTED" id="t12" /></Column></columns><items><ColumnListItem vAlign="Middle" id="cli"><cells><ObjectIdentifier id="o1" title="{vendor_name}"></ObjectIdentifier><ObjectIdentifier id="o2" title="{Vendor_no}"></ObjectIdentifier><ObjectIdentifier id="o3" title="{comp_code}"></ObjectIdentifier><ObjectIdentifier id="o4" title="{Total_no_of_invoice}"></ObjectIdentifier><ObjectIdentifier id="o5" title="{Total_Amount}"></ObjectIdentifier><ObjectIdentifier id="o6" title="{Total_no_of_Invoice_Due}"></ObjectIdentifier><ObjectIdentifier id="o7" title="{Total_Due_Amount}"></ObjectIdentifier><ObjectIdentifier id="o8" title="{Total_no_of_Invoice_OverDue}"></ObjectIdentifier><ObjectIdentifier id="o9" title="{Total_Overdue_Amount}"></ObjectIdentifier><ObjectIdentifier id="o10" title="{Total_No_of_Invoice_Posted}"></ObjectIdentifier><ObjectIdentifier id="o11" title="{Total_amt_Posted}"></ObjectIdentifier></cells></ColumnListItem></items></Table></ScrollContainer><content /></Page></mvc:View>\n'
}});

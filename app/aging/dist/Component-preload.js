//@ui5-bundle aging/Component-preload.js
jQuery.sap.registerPreloadedModules({
"version":"2.0",
"modules":{
	"aging/Component.js":function(){sap.ui.define(["sap/ui/core/UIComponent","sap/ui/Device","aging/model/models"],function(e,i,t){"use strict";return e.extend("aging.Component",{metadata:{manifest:"json"},init:function(){e.prototype.init.apply(this,arguments);this.getRouter().initialize();this.setModel(t.createDeviceModel(),"device")}})});
},
	"aging/controller/Aging.controller.js":function(){sap.ui.define(["sap/ui/core/mvc/Controller"],function(n){"use strict";return n.extend("aging.controller.Aging",{onInit:function(){}})});
},
	"aging/controller/App.controller.js":function(){sap.ui.define(["sap/ui/core/mvc/Controller"],function(n){"use strict";return n.extend("aging.controller.App",{onInit:function(){}})});
},
	"aging/i18n/i18n.properties":'# This is the resource bundle for aging\n\n#Texts for manifest.json\n\n#XTIT: Application name\nappTitle=aging\n\n#YDES: Application description\nappDescription=An SAP Fiori application.\n#XTIT: Main view title\ntitle=aging\n\n#XFLD,27\nflpTitle=aging app\n',
	"aging/manifest.json":'{"_version":"1.59.0","sap.app":{"id":"aging","type":"application","i18n":"i18n/i18n.properties","applicationVersion":{"version":"0.0.1"},"title":"{{appTitle}}","description":"{{appDescription}}","resources":"resources.json","sourceTemplate":{"id":"@sap/generator-fiori:basic","version":"1.13.3","toolsId":"5e1a3bff-7e45-4c59-918f-cf5680545411"},"dataSources":{"mainService":{"uri":"odata/v4/catalog/","type":"OData","settings":{"annotations":[],"odataVersion":"4.0"}}},"crossNavigation":{"inbounds":{"aging-display":{"semanticObject":"aging","action":"display","title":"{{flpTitle}}","signature":{"parameters":{},"additionalParameters":"allowed"}}}}},"sap.ui":{"technology":"UI5","icons":{"icon":"","favIcon":"","phone":"","phone@2":"","tablet":"","tablet@2":""},"deviceTypes":{"desktop":true,"tablet":true,"phone":true}},"sap.ui5":{"flexEnabled":true,"dependencies":{"minUI5Version":"1.123.1","libs":{"sap.m":{},"sap.ui.core":{},"sap.f":{},"sap.suite.ui.generic.template":{},"sap.ui.comp":{},"sap.ui.generic.app":{},"sap.ui.table":{},"sap.ushell":{}}},"contentDensities":{"compact":true,"cozy":true},"models":{"i18n":{"type":"sap.ui.model.resource.ResourceModel","settings":{"bundleName":"aging.i18n.i18n"}},"":{"dataSource":"mainService","preload":true,"settings":{"synchronizationMode":"None","operationMode":"Server","autoExpandSelect":true,"earlyRequests":true}}},"resources":{"css":[{"uri":"css/style.css"}]},"routing":{"config":{"routerClass":"sap.m.routing.Router","viewType":"XML","async":true,"viewPath":"aging.view","controlAggregation":"pages","controlId":"app","clearControlAggregation":false},"routes":[{"name":"RouteAging","pattern":":?query:","target":["TargetAging"]}],"targets":{"TargetAging":{"viewType":"XML","transition":"slide","clearControlAggregation":false,"viewId":"Aging","viewName":"Aging"}}},"rootView":{"viewName":"aging.view.App","type":"XML","async":true,"id":"App"}},"sap.cloud":{"public":true,"service":"reportapprouter"}}',
	"aging/model/models.js":function(){sap.ui.define(["sap/ui/model/json/JSONModel","sap/ui/Device"],function(e,n){"use strict";return{createDeviceModel:function(){var i=new e(n);i.setDefaultBindingMode("OneWay");return i}}});
},
	"aging/view/Aging.view.xml":'<mvc:View xmlns:tnt="sap.tnt" xmlns:commons="sap.suite.ui.commons" xmlns:layout="sap.ui.layout" controllerName="aging.controller.Aging"\n    xmlns:mvc="sap.ui.core.mvc" displayBlock="true"\n    xmlns:feeds="sap.viz.ui5.controls.common.feeds"\n    xmlns:controls="sap.viz.ui5.controls"\n     xmlns:data="sap.viz.ui5.data"\n    xmlns="sap.m"><Page id="page"><tnt:ToolHeader id="tool" class="toolhead"><Button icon="sap-icon://menu2" id="b1" type="Transparent" tooltip="Menu"><layoutData><OverflowToolbarLayoutData priority="NeverOverflow" id="toolbar"></OverflowToolbarLayoutData></layoutData></Button><Image src="./img/logo.png" id="img" decorative="false" press="onLogoPressed" tooltip="SAP Logo"></Image><Title text="Chart" id="t2" wrapping="false"></Title></tnt:ToolHeader><Panel id=\'settingsPanel\' class="panelStyle" expandable="true" expanded="true" headerText="Aging" stickyHeader="true" width="auto"><layout:BlockLayout id="lay" background="Dashboard" visible="true"><layout:content><layout:BlockLayoutRow id="layrow1"><layout:content><layout:BlockLayoutCell id="cell1"><layout:content ><controls:VizFrame  height="100%" width="105%" uiConfig="{applicationSet: \'fiori\'}"  id="barChart" vizProperties="{plotArea: { drawingEffect: \'glossy\'}, title:{ text:\'Aging Overview Based On Company Code\'},dataLabel:{visible:false,showTotal:true},ColorPalette:{color:\'#FF0000\'}}"><controls:layoutData ><FlexItemData growFactor="1" id="flex" /></controls:layoutData><controls:dataset ><data:FlattenedDataset data="{/age}" id="fd"><data:dimensions><data:DimensionDefinition name="Dimension1" value="{dimension}" id="dim1"></data:DimensionDefinition></data:dimensions><data:measures><data:MeasureDefinition name="PO" value="{measure}" id="ms1"></data:MeasureDefinition></data:measures><data:measures><data:MeasureDefinition name="NPO" value="{measure1}" id="ms3"></data:MeasureDefinition></data:measures><data:measures><data:MeasureDefinition name="NONE" value="{none}" id="none"></data:MeasureDefinition></data:measures></data:FlattenedDataset></controls:dataset><controls:feeds ><feeds:FeedItem uid="categoryAxis" type="Dimension" values="Dimension1" id="feed1"></feeds:FeedItem><feeds:FeedItem uid="valueAxis" type="Measure"  values="PO" id="feed2"></feeds:FeedItem><feeds:FeedItem uid="valueAxis" type="Measure" values="NPO" id="feed5"></feeds:FeedItem><feeds:FeedItem uid="valueAxis" type="Measure" values="NONE" id="feed6"></feeds:FeedItem></controls:feeds></controls:VizFrame></layout:content></layout:BlockLayoutCell><layout:BlockLayoutCell id="cell2"><layout:content><controls:VizFrame width="100%" uiConfig="{applicationSet: \'fiori\'}"  id="barChart1" vizProperties="{plotArea: { drawingEffect: \'glossy\'}, title:{ text:\'Aging Overview Based On Vendor\'},dataLabel:{visible:false,showTotal:true},ColorPalette:{color:\'#FF0000\'}}"><controls:layoutData><FlexItemData growFactor="1" id="flex1" /></controls:layoutData><controls:dataset ><data:FlattenedDataset data="{/age1}" id="fd1"><data:dimensions><data:DimensionDefinition name="Dimension1" value="{dimension}" id="dim2"></data:DimensionDefinition></data:dimensions><data:measures><data:MeasureDefinition name="Measure1" value="{measure}" id="ms2"></data:MeasureDefinition></data:measures></data:FlattenedDataset></controls:dataset><controls:feeds><feeds:FeedItem uid="categoryAxis" type="Dimension" values="Dimension1" id="feed3"></feeds:FeedItem><feeds:FeedItem uid="valueAxis" type="Measure" values="Measure1" id="feed4"></feeds:FeedItem></controls:feeds></controls:VizFrame></layout:content></layout:BlockLayoutCell></layout:content></layout:BlockLayoutRow></layout:content></layout:BlockLayout><content /></Panel></Page></mvc:View>\n',
	"aging/view/App.view.xml":'<mvc:View controllerName="aging.controller.App"\n    xmlns:html="http://www.w3.org/1999/xhtml"\n    xmlns:mvc="sap.ui.core.mvc" displayBlock="true"\n    xmlns="sap.m"><App id="app"></App></mvc:View>\n'
}});

sap.ui.define(["sap/ui/core/UIComponent","sap/ui/Device","productivityreport/model/models"],function(e,t,i){"use strict";return e.extend("productivityreport.Component",{metadata:{manifest:"json"},init:function(){e.prototype.init.apply(this,arguments);this.getRouter().initialize();this.setModel(i.createDeviceModel(),"device")}})});
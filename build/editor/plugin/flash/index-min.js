/*
Copyright 2012, KISSY UI Library v1.30dev
MIT Licensed
build time: Jun 7 15:13
*/
KISSY.add("editor/plugin/flash/index",function(j,g,h,e){return{init:function(b){var d=b.htmlDataProcessor;d.dataFilter.addRules({tags:{object:function(a){var c;if(!a.getAttribute("classid")){var b=a.childNodes;for(c=0;c<b.length;c++)if("embed"==b[c].nodeName)if(e.isFlashEmbed(b[c][c]))break;else return d.createFakeParserElement(a,"ke_flash","flash",!0);return null}return d.createFakeParserElement(a,"ke_flash","flash",!0)},embed:function(a){return e.isFlashEmbed(a)?d.createFakeParserElement(a,"ke_flash",
"flash",!0):null}}},5);var i=b.get("pluginConfig").flash||{},f=new h({editor:b,cls:"ke_flash",type:"flash",contextMenuId:"flash-contextmenu",contextMenuHandlers:{"Flash属性":function(){var a=this.get("editorSelectedEl");a&&f.show(a)}}});!1!==i.btn&&b.addButton("flash",{tooltip:"插入Flash",mode:g.WYSIWYG_MODE},{offClick:function(){f.show()}})}}},{requires:["editor","../flashCommon/baseClass","../flashCommon/utils"]});

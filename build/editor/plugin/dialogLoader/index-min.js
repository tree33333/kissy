/*
Copyright 2012, KISSY UI Library v1.30dev
MIT Licensed
build time: Jun 7 15:13
*/
KISSY.add("editor/plugin/dialogLoader/index",function(b,e,c){var a,f={loading:function(){a||(a=new e({x:0,width:6==b.UA.ie?b.DOM.docWidth():"100%",y:0,zIndex:c.baseZIndex(c.zIndexManager.LOADING),prefixCls:"ks-editor-",elCls:"ks-editor-global-loading"}));a.set("height",b.DOM.docHeight());a.show();a.loading()},unloading:function(){a.hide()}};return{useDialog:function(a,d,c){a.focus();a.hasDialog(d)?setTimeout(function(){a.showDialog(d,c)},0):(f.loading(),b.use("editor/plugin/"+d,function(b,e){f.unloading();
a.addDialog(d,new e(a));a.showDialog(d,c)}))}}},{requires:["overlay","editor"]});

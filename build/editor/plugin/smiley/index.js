﻿/*
Copyright 2012, KISSY UI Library v1.30dev
MIT Licensed
build time: Jun 7 15:13
*/
KISSY.add("editor/plugin/smiley/index", function (S, Editor, Overlay4E) {

    var smiley_markup = "<div class='ks-editor-smiley-sprite'>";
    for (var i = 0; i <= 98; i++) {
        smiley_markup += "<a href='javascript:void(0)' " +
            "data-icon='http://a.tbcdn.cn/sys/wangwang/smiley/48x48/" + i + ".gif'>" +
            "</a>"
    }
    smiley_markup += "</div>";

    return {
        init:function (editor) {
            editor.addButton("smiley", {
                tooltip:"插入表情",
                checkable:true,
                mode:Editor.WYSIWYG_MODE
            }, {
                init:function () {
                    var self = this;
                    self.on("blur", function () {
                        // make click event fire
                        setTimeout(function () {
                            self.onClick();
                        }, 150);
                    });
                },
                offClick:function () {
                    var self = this, smiley;
                    if (!(smiley = self.smiley)) {
                        smiley = self.smiley = new Overlay4E({
                            content:smiley_markup,
                            focus4e:false,
                            width:"297px",
                            autoRender:true,
                            elCls:"ks-editor-popup",
                            zIndex:Editor.baseZIndex(Editor.zIndexManager.POPUP_MENU),
                            mask:false
                        });
                        smiley.get("el").on("click", function (ev) {
                            var t = new S.Node(ev.target),
                                icon;
                            if (t.nodeName() == "a" &&
                                (icon = t.attr("data-icon"))) {
                                var img = new S.Node("<img " +
                                    "alt='' src='" +
                                    icon + "'/>", null,
                                    editor.get("document")[0]);
                                editor.insertElement(img);
                            }
                        });
                        smiley.on("hide", function () {
                            self.set("checked", false);
                        });
                    }
                    smiley.set("align", {
                        node:this.get("el"),
                        points:["bl", "tl"]
                    });
                    smiley.show();
                },
                onClick:function () {
                    this.smiley && this.smiley.hide();
                },
                destructor:function () {
                    if (this.smiley) {
                        this.smiley.destroy();
                    }
                }
            });
        }
    };
}, {
    requires:['editor', '../overlay/']
});

﻿/*
Copyright 2012, KISSY UI Library v1.30dev
MIT Licensed
build time: Jun 7 15:13
*/
KISSY.add("editor/plugin/backColor/index", function (S, Editor, Button, cmd) {

    return {
        init:function (editor) {
            cmd.init(editor);
            editor.addButton("backColor",{
                cmdType:'backColor',
                tooltip:"背景颜色"
            }, undefined, Button);
        }
    };
}, {
    requires:['editor', '../color/btn', './cmd']
});

﻿/*
Copyright 2012, KISSY UI Library v1.30dev
MIT Licensed
build time: Jun 7 15:13
*/
KISSY.add("editor/plugin/color/cmd", function (S, Editor) {
    function applyColor(editor, c, styles) {
        var doc = editor.get("document")[0];
        editor.execCommand("save");
        if (c) {
            new Editor.Style(styles, {
                color:c
            }).apply(doc);
        } else {
            // Value 'inherit'  is treated as a wildcard,
            // which will match any value.
            //清除已设格式
            new Editor.Style(styles, {
                color:"inherit"
            }).remove(doc);
        }
        editor.execCommand("save");
    }

    return {
        applyColor:applyColor
    };
}, {
    requires:['editor']
});

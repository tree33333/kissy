/**
 * separator for button
 * @author yiminghe@gmail.com
 */
KISSY.add("editor/plugin/separator/index", function (S, Editor) {
    return {
        init:function (editor) {
            var s = new S.Node('<span ' +
                'class="ks-editor-toolbar-separator">&nbsp;' +
                '</span>')
                .appendTo(editor.get("toolBarEl"));
            editor.on("destroy", function () {
                s.remove();
            });
        }
    };
}, {
    requires:['editor']
});
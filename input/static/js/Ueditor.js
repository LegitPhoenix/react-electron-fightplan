'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Ueditor = _react2.default.createClass({
    displayName: 'Ueditor',
    componentDidMount: function componentDidMount() {
        var editor = UE.getEditor(this.props.id, {
            toolbars: [['fullscreen', 'source', '|', 'undo', 'redo', '|', 'bold', 'italic', 'underline', 'fontborder', 'strikethrough', 'superscript', 'subscript', 'removeformat', 'formatmatch', '|', 'forecolor', 'backcolor', 'insertorderedlist', 'insertunorderedlist', 'selectall', 'cleardoc', '|', 'rowspacingtop', 'rowspacingbottom', 'lineheight', '|', 'customstyle', 'paragraph', 'fontfamily', 'fontsize', '|', 'directionalityltr', 'directionalityrtl', 'indent', '|', 'justifyleft', 'justifycenter', 'justifyright', 'justifyjustify', '|', 'touppercase', 'tolowercase', '|', 'imagenone', 'imageleft', 'imageright', 'imagecenter', '|', 'simpleupload', 'horizontal', 'date', 'time']],
            lang: "zh-cn",
            'fontfamily': [{ label: '', name: 'songti', val: '宋体,SimSun' }, { label: '', name: 'kaiti', val: '楷体,楷体_GB2312, SimKai' }, { label: '', name: 'yahei', val: '微软雅黑,Microsoft YaHei' }, { label: '', name: 'heiti', val: '黑体, SimHei' }, { label: '', name: 'lishu', val: '隶书, SimLi' }, { label: '', name: 'andaleMono', val: 'andale mono' }, { label: '', name: 'arial', val: 'arial, helvetica,sans-serif' }, { label: '', name: 'arialBlack', val: 'arial black,avant garde' }, { label: '', name: 'comicSansMs', val: 'comic sans ms' }, { label: '', name: 'impact', val: 'impact,chicago' }, { label: '', name: 'timesNewRoman', val: 'times new roman' }],
            'fontsize': [10, 11, 12, 14, 16, 18, 20, 24, 36],
            enableAutoSave: false,
            autoHeightEnabled: false,
            initialFrameHeight: this.props.height,
            initialFrameWidth: '100%',
            readonly: this.props.disabled
        });
        var me = this;
        editor.ready(function (ueditor) {
            var value = me.props.value ? me.props.value : '<p></p>';
            editor.setContent(value);
        });
    },

    render: function render() {
        return _react2.default.createElement('script', { id: this.props.id, name: 'content', type: 'text/plain' });
    }
});
exports.default = Ueditor;
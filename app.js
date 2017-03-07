'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var H1 = function (_React$Component) {
  _inherits(H1, _React$Component);

  function H1(props) {
    _classCallCheck(this, H1);

    var _this = _possibleConstructorReturn(this, (H1.__proto__ || Object.getPrototypeOf(H1)).call(this, props));

    _this.state = {
      page: props.page
    };
    props.page.refresh = _this.refresh.bind(_this);
    return _this;
  }

  _createClass(H1, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'h1',
        null,
        this.state.page.content
      );
    }
  }, {
    key: 'refresh',
    value: function refresh() {
      this.setState(this.state);
    }
  }]);

  return H1;
}(_react2.default.Component);

var Button = function (_React$Component2) {
  _inherits(Button, _React$Component2);

  function Button(props) {
    _classCallCheck(this, Button);

    var _this2 = _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).call(this, props));

    _this2.state = { content: props.page };
    return _this2;
  }

  _createClass(Button, [{
    key: 'render',
    value: function render() {
      var _this3 = this;

      return _react2.default.createElement(
        'button',
        { onClick: function onClick() {
            _this3.props.page.content = 'Click Button';
            _this3.props.page.refresh();
          } },
        'Button'
      );
    }
  }]);

  return Button;
}(_react2.default.Component);

var Div = function (_React$Component3) {
  _inherits(Div, _React$Component3);

  function Div() {
    _classCallCheck(this, Div);

    return _possibleConstructorReturn(this, (Div.__proto__ || Object.getPrototypeOf(Div)).apply(this, arguments));
  }

  _createClass(Div, [{
    key: 'render',
    value: function render() {
      var page = { content: 'Init' };
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(Button, { page: page }),
        _react2.default.createElement(H1, { page: page })
      );
    }
  }]);

  return Div;
}(_react2.default.Component);

(0, _reactDom.render)(_react2.default.createElement(Div, null), document.getElementById('root'));


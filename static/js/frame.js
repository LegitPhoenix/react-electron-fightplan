'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HomePage = exports.Container = exports.Footer = exports.Header = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _electron = require('electron');

var _reactBootstrap = require('react-bootstrap');

var _baseInfo = require('./baseInfo.js');

var _baseInfo2 = _interopRequireDefault(_baseInfo);

var _statistic = require('./statistic.js');

var _statistic2 = _interopRequireDefault(_statistic);

var _bigNews = require('./bigNews.js');

var _bigNews2 = _interopRequireDefault(_bigNews);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = exports.Header = function (_React$Component) {
  _inherits(Header, _React$Component);

  function Header(props) {
    _classCallCheck(this, Header);

    var _this = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this, props));

    _this.state = { title: props.page.title };

    props.page.setTitle = _this.setTitle.bind(_this);
    return _this;
  }

  _createClass(Header, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { id: 'header' },
        _react2.default.createElement(
          'h1',
          null,
          this.state.title
        )
      );
    }
  }, {
    key: 'setTitle',
    value: function setTitle(str) {
      this.setState({ title: str });
    }
  }]);

  return Header;
}(_react2.default.Component);

var Footer = exports.Footer = function (_React$Component2) {
  _inherits(Footer, _React$Component2);

  function Footer(props) {
    _classCallCheck(this, Footer);

    return _possibleConstructorReturn(this, (Footer.__proto__ || Object.getPrototypeOf(Footer)).call(this, props));
  }

  _createClass(Footer, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { id: 'footer' },
        _react2.default.createElement(
          'div',
          { id: 'home' },
          _react2.default.createElement(
            _reactBootstrap.Button,
            { bsStyle: 'primary', onClick: this.switchHomePage.bind(this) },
            _react2.default.createElement('span', { className: 'glyphicon glyphicon-home' })
          )
        ),
        _react2.default.createElement(
          'div',
          { id: 'nav' },
          _react2.default.createElement(
            _reactBootstrap.Button,
            { bsStyle: 'success', onClick: this.switchBaseInfoPage.bind(this) },
            '\u57FA\u672C\u60C5\u51B5\u4ECB\u7ECD'
          ),
          _react2.default.createElement(
            _reactBootstrap.Button,
            { bsStyle: 'success', onClick: this.switchStatisticPage.bind(this) },
            '\u6276\u8D2B\u653B\u575A\u5DE5\u4F5C\u8BA1\u5212'
          ),
          _react2.default.createElement(
            _reactBootstrap.Button,
            { bsStyle: 'success', onClick: this.switchBigNewsPage.bind(this) },
            '\u6276\u8D2B\u653B\u575A\u5927\u4E8B\u8BB0'
          )
        ),
        _react2.default.createElement(
          'div',
          { id: 'exit' },
          _react2.default.createElement(
            _reactBootstrap.Button,
            { bsStyle: 'danger', onClick: this.exitProgram.bind(this) },
            _react2.default.createElement('span', { className: 'glyphicon glyphicon-off' })
          )
        )
      );
    }
  }, {
    key: 'switchHomePage',
    value: function switchHomePage() {
      this.props.page.setTitle('小徳营子乡精准脱贫攻坚作战计划');
      this.props.page.setContent(homePage);
    }
  }, {
    key: 'switchBaseInfoPage',
    value: function switchBaseInfoPage() {
      this.props.page.setTitle('基本情况介绍');
      this.props.page.setContent(baseInfo);
    }
  }, {
    key: 'switchStatisticPage',
    value: function switchStatisticPage() {
      this.props.page.setTitle('扶贫攻坚工作计划');
      this.props.page.setContent(statistic);
    }
  }, {
    key: 'switchBigNewsPage',
    value: function switchBigNewsPage() {
      this.props.page.setTitle('扶贫攻坚大事记');
      this.props.page.setContent(bigNews);
    }
  }, {
    key: 'exitProgram',
    value: function exitProgram() {
      _electron.ipcRenderer.send('exit');
    }
  }]);

  return Footer;
}(_react2.default.Component);

var Container = exports.Container = function (_React$Component3) {
  _inherits(Container, _React$Component3);

  function Container(props) {
    _classCallCheck(this, Container);

    var _this3 = _possibleConstructorReturn(this, (Container.__proto__ || Object.getPrototypeOf(Container)).call(this, props));

    _this3.state = { content: homePage };
    props.page.setContent = _this3.setContent.bind(_this3);
    return _this3;
  }

  _createClass(Container, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        this.state.content
      );
    }
  }, {
    key: 'setContent',
    value: function setContent(content) {
      this.setState({ content: content });
    }
  }]);

  return Container;
}(_react2.default.Component);

;

var HomePage = exports.HomePage = function (_React$Component4) {
  _inherits(HomePage, _React$Component4);

  function HomePage() {
    _classCallCheck(this, HomePage);

    return _possibleConstructorReturn(this, (HomePage.__proto__ || Object.getPrototypeOf(HomePage)).apply(this, arguments));
  }

  _createClass(HomePage, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { id: 'container', className: 'pic-box' },
        _react2.default.createElement(
          _reactBootstrap.Carousel,
          null,
          _react2.default.createElement(
            _reactBootstrap.Carousel.Item,
            null,
            _react2.default.createElement('img', { width: 900, height: 500, src: 'static/img/bg1.jpg' })
          ),
          _react2.default.createElement(
            _reactBootstrap.Carousel.Item,
            null,
            _react2.default.createElement('img', { width: 900, height: 500, src: 'static/img/bg2.jpg' })
          )
        )
      );
    }
  }]);

  return HomePage;
}(_react2.default.Component);

var homePage = _react2.default.createElement(HomePage, null);
var baseInfo = _react2.default.createElement(_baseInfo2.default, null);
var statistic = _react2.default.createElement(_statistic2.default, null);
var bigNews = _react2.default.createElement(_bigNews2.default, null);
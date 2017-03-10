'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = require('react-bootstrap');

var _models = require('./models.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Menu = function (_React$Component) {
  _inherits(Menu, _React$Component);

  function Menu(props) {
    _classCallCheck(this, Menu);

    var _this = _possibleConstructorReturn(this, (Menu.__proto__ || Object.getPrototypeOf(Menu)).call(this, props));

    _this.state = { articles: [] };
    return _this;
  }

  _createClass(Menu, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      _models.Article.findAll().then(function (articles) {
        _this2.setState({ articles: articles });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      return _react2.default.createElement(
        'div',
        { id: 'menu' },
        _react2.default.createElement(
          _reactBootstrap.PanelGroup,
          { accordion: true },
          _react2.default.createElement(
            _reactBootstrap.Panel,
            { header: '\u65B0\u95FB\u5217\u8868', eventKey: '1' },
            _react2.default.createElement(
              'ul',
              null,
              this.state.articles.map(function (article) {
                return _react2.default.createElement(
                  'li',
                  null,
                  _react2.default.createElement(
                    'a',
                    { href: 'javascript:void(0);', onClick: function onClick() {
                        _this3.props.onSelect(article.id);
                      } },
                    article.title
                  )
                );
              })
            )
          )
        )
      );
    }
  }]);

  return Menu;
}(_react2.default.Component);

var Content = function (_React$Component2) {
  _inherits(Content, _React$Component2);

  function Content() {
    _classCallCheck(this, Content);

    return _possibleConstructorReturn(this, (Content.__proto__ || Object.getPrototypeOf(Content)).apply(this, arguments));
  }

  _createClass(Content, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'h1',
          { style: { textAlign: 'center' } },
          this.props.article.title
        ),
        _react2.default.createElement(
          'h2',
          { style: { textAlign: 'center' } },
          this.props.article.date
        ),
        _react2.default.createElement('hr', null),
        _react2.default.createElement(
          'pre',
          null,
          this.props.article.content
        )
      );
    }
  }]);

  return Content;
}(_react2.default.Component);

var BigNews = function (_React$Component3) {
  _inherits(BigNews, _React$Component3);

  function BigNews(props) {
    _classCallCheck(this, BigNews);

    var _this5 = _possibleConstructorReturn(this, (BigNews.__proto__ || Object.getPrototypeOf(BigNews)).call(this, props));

    _this5.state = { article: {} };
    return _this5;
  }

  _createClass(BigNews, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { id: 'container' },
        _react2.default.createElement(Menu, { onSelect: this.handleSelect.bind(this) }),
        _react2.default.createElement(Content, { article: this.state.article })
      );
    }
  }, {
    key: 'handleSelect',
    value: function handleSelect(id) {
      var _this6 = this;

      _models.Article.findOne({ where: { id: id } }).then(function (article) {
        _this6.setState({ article: article });
      });
    }
  }]);

  return BigNews;
}(_react2.default.Component);

exports.default = BigNews;
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

    _this.state = { towns: [], vills: [], persons: [] };
    return _this;
  }

  _createClass(Menu, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      _models.Town.findAll().then(function (towns) {
        _this2.state.towns = towns.map(function (town) {
          return {
            id: town.id,
            name: town.name
          };
        });
        _models.Vill.findAll().then(function (vills) {
          _this2.state.vills = vills.map(function (vill) {
            return {
              id: vill.id,
              town_id: vill.town_id,
              name: vill.name
            };
          });
          _models.Person.findAll().then(function (persons) {
            _this2.state.persons = persons.map(function (person) {
              return {
                id: person.id,
                vill: person.vill,
                name: person.name
              };
            });
            _this2.setState(_this2.state);
          });
        });
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
          this.state.towns.map(function (town) {
            return _react2.default.createElement(
              _reactBootstrap.Panel,
              { header: town.name, eventKey: town.id, key: town.id },
              _react2.default.createElement(
                'ul',
                null,
                _react2.default.createElement(
                  'li',
                  null,
                  _react2.default.createElement(
                    'a',
                    { href: 'javascript:void(0);', onClick: _this3.getTownInfo.bind(_this3, town.id, 0) },
                    town.name,
                    '\u57FA\u672C\u4FE1\u606F\u4ECB\u7ECD'
                  )
                ),
                _react2.default.createElement(
                  'li',
                  null,
                  _react2.default.createElement(
                    'a',
                    { href: 'javascript:void(0);', onClick: _this3.getTownInfo.bind(_this3, town.id, 1) },
                    town.name,
                    '\u73ED\u5B50\u4ECB\u7ECD'
                  )
                )
              ),
              _react2.default.createElement('hr', null),
              _react2.default.createElement(
                _reactBootstrap.PanelGroup,
                { accordion: true },
                _this3.state.vills.map(function (vill) {
                  if (vill.town_id == town.id) return _react2.default.createElement(
                    _reactBootstrap.Panel,
                    { header: vill.name, eventKey: vill.id, key: vill.id },
                    _react2.default.createElement(
                      'ul',
                      null,
                      _react2.default.createElement(
                        'li',
                        null,
                        _react2.default.createElement(
                          'a',
                          { href: 'javascript:void(0);', onClick: _this3.getVillInfo.bind(_this3, vill.id, 0) },
                          vill.name,
                          '\u57FA\u672C\u4FE1\u606F\u4ECB\u7ECD'
                        )
                      ),
                      _react2.default.createElement(
                        'li',
                        null,
                        _react2.default.createElement(
                          'a',
                          { href: 'javascript:void(0);', onClick: _this3.getVillInfo.bind(_this3, vill.id, 1) },
                          vill.name,
                          '\u73ED\u5B50\u4ECB\u7ECD'
                        )
                      )
                    ),
                    _react2.default.createElement('hr', null),
                    _react2.default.createElement(
                      'ul',
                      null,
                      _this3.state.persons.map(function (person) {
                        if (person.vill == vill.name) return _react2.default.createElement(
                          'li',
                          { key: person.id },
                          _react2.default.createElement(
                            'a',
                            { href: 'javascript:void(0);', onClick: _this3.getPersonInfo.bind(_this3, person.id) },
                            person.name
                          )
                        );
                      })
                    )
                  );
                })
              )
            );
          })
        )
      );
    }
  }, {
    key: 'getTownInfo',
    value: function getTownInfo(id, type) {
      var _this4 = this;

      _models.Town.findOne({ where: { id: id } }).then(function (town) {
        _this4.props.page.article = {};
        if (type == 1) {
          _this4.props.page.article.title = town.name + '班子介绍';
          _this4.props.page.article.content = town.team;
        } else {
          _this4.props.page.article.title = town.name + '基本情况介绍';
          _this4.props.page.article.content = town.desc;
        }
        _this4.props.page.type = 0;
        _this4.props.page.refresh();
      });
    }
  }, {
    key: 'getVillInfo',
    value: function getVillInfo(id, type) {
      var _this5 = this;

      _models.Vill.findOne({ where: { id: id } }).then(function (vill) {
        _this5.props.page.article = {};
        if (type == 1) {
          _this5.props.page.article.title = vill.name + '班子介绍';
          _this5.props.page.article.content = vill.team;
        } else {
          _this5.props.page.article.title = vill.name + '基本情况介绍';
          _this5.props.page.article.content = vill.desc;
        }
        _this5.props.page.type = 0;
        _this5.props.page.refresh();
      });
    }
  }, {
    key: 'getPersonInfo',
    value: function getPersonInfo(id) {
      var _this6 = this;

      _models.Person.findOne({ where: { id: id } }).then(function (person) {
        _this6.props.page.cur = person;
        _this6.props.page.type = 1;
        _this6.props.page.refresh();
      });
    }
  }]);

  return Menu;
}(_react2.default.Component);

var InfoPage = function (_React$Component2) {
  _inherits(InfoPage, _React$Component2);

  function InfoPage(props) {
    _classCallCheck(this, InfoPage);

    var _this7 = _possibleConstructorReturn(this, (InfoPage.__proto__ || Object.getPrototypeOf(InfoPage)).call(this, props));

    _this7.state = { cur: props.page.cur };
    return _this7;
  }

  _createClass(InfoPage, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'h3',
          null,
          '\u57FA\u672C\u8D44\u6599'
        ),
        _react2.default.createElement('hr', null),
        _react2.default.createElement('input', { type: 'hidden', id: 'pid', value: '' }),
        _react2.default.createElement(
          'div',
          { className: 'row' },
          _react2.default.createElement(
            'div',
            { className: 'col-md-2' },
            '\u6237\u4E3B\u59D3\u540D\uFF1A'
          ),
          _react2.default.createElement(
            'div',
            { className: 'col-md-2' },
            this.props.page.cur.name
          ),
          _react2.default.createElement('div', { className: 'col-md-1' }),
          _react2.default.createElement(
            'div',
            { className: 'col-md-2' },
            '\u6027\u522B\uFF1A'
          ),
          _react2.default.createElement(
            'div',
            { className: 'col-md-2' },
            this.props.page.cur.sex
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'row' },
          _react2.default.createElement(
            'div',
            { className: 'col-md-2' },
            '\u6C11\u65CF\uFF1A'
          ),
          _react2.default.createElement(
            'div',
            { className: 'col-md-2' },
            this.props.page.cur.nation
          ),
          _react2.default.createElement('div', { className: 'col-md-1' }),
          _react2.default.createElement(
            'div',
            { className: 'col-md-2' },
            '\u4E0E\u6237\u4E3B\u5173\u7CFB\uFF1A'
          ),
          _react2.default.createElement(
            'div',
            { className: 'col-md-2' },
            this.props.page.cur.role
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'row' },
          _react2.default.createElement(
            'div',
            { className: 'col-md-2' },
            '\u7701\u4EFD\uFF1A'
          ),
          _react2.default.createElement(
            'div',
            { className: 'col-md-2' },
            this.props.page.cur.province
          ),
          _react2.default.createElement('div', { className: 'col-md-1' }),
          _react2.default.createElement(
            'div',
            { className: 'col-md-2' },
            '\u57CE\u5E02\uFF1A'
          ),
          _react2.default.createElement(
            'div',
            { className: 'col-md-2' },
            this.props.page.cur.city
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'row' },
          _react2.default.createElement(
            'div',
            { className: 'col-md-2' },
            '\u53BF\uFF1A'
          ),
          _react2.default.createElement(
            'div',
            { className: 'col-md-2' },
            this.props.page.cur.county
          ),
          _react2.default.createElement('div', { className: 'col-md-1' }),
          _react2.default.createElement(
            'div',
            { className: 'col-md-2' },
            '\u9547\uFF1A'
          ),
          _react2.default.createElement(
            'div',
            { className: 'col-md-2' },
            this.props.page.cur.town
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'row' },
          _react2.default.createElement(
            'div',
            { className: 'col-md-2' },
            '\u884C\u653F\u6751\uFF1A'
          ),
          _react2.default.createElement(
            'div',
            { className: 'col-md-2' },
            this.props.page.cur.vill
          ),
          _react2.default.createElement('div', { className: 'col-md-1' }),
          _react2.default.createElement(
            'div',
            { className: 'col-md-2' },
            '\u6237\u7F16\u53F7\uFF1A'
          ),
          _react2.default.createElement(
            'div',
            { className: 'col-md-2' },
            this.props.page.cur.family
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'row' },
          _react2.default.createElement(
            'div',
            { className: 'col-md-2' },
            '\u4EBA\u7F16\u53F7\uFF1A'
          ),
          _react2.default.createElement(
            'div',
            { className: 'col-md-2' },
            this.props.page.cur.person
          ),
          _react2.default.createElement('div', { className: 'col-md-1' }),
          _react2.default.createElement(
            'div',
            { className: 'col-md-2' },
            '\u4EBA\u6570\uFF1A'
          ),
          _react2.default.createElement(
            'div',
            { className: 'col-md-2' },
            this.props.page.cur.count
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'row' },
          _react2.default.createElement(
            'div',
            { className: 'col-md-2' },
            '\u6587\u5316\u7A0B\u5EA6\uFF1A'
          ),
          _react2.default.createElement(
            'div',
            { className: 'col-md-2' },
            this.props.page.cur.culture
          ),
          _react2.default.createElement('div', { className: 'col-md-1' }),
          _react2.default.createElement(
            'div',
            { className: 'col-md-2' },
            '\u5728\u6821\u751F\u72B6\u51B5\uFF1A'
          ),
          _react2.default.createElement(
            'div',
            { className: 'col-md-2' },
            this.props.page.cur.school
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'row' },
          _react2.default.createElement(
            'div',
            { className: 'col-md-2' },
            '\u5065\u5EB7\u72B6\u51B5\uFF1A'
          ),
          _react2.default.createElement(
            'div',
            { className: 'col-md-2' },
            this.props.page.cur.health
          ),
          _react2.default.createElement('div', { className: 'col-md-1' }),
          _react2.default.createElement(
            'div',
            { className: 'col-md-2' },
            '\u52B3\u52A8\u80FD\u529B\uFF1A'
          ),
          _react2.default.createElement(
            'div',
            { className: 'col-md-2' },
            this.props.page.cur.work
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'row' },
          _react2.default.createElement(
            'div',
            { className: 'col-md-2' },
            '\u52B3\u5DE5\u72B6\u51B5\uFF1A'
          ),
          _react2.default.createElement(
            'div',
            { className: 'col-md-2' },
            this.props.page.cur.labour
          ),
          _react2.default.createElement('div', { className: 'col-md-1' }),
          _react2.default.createElement(
            'div',
            { className: 'col-md-2' },
            '\u52B3\u5DE5\u65F6\u95F4\uFF1A'
          ),
          _react2.default.createElement(
            'div',
            { className: 'col-md-2' },
            this.props.page.cur.labour_time
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'row' },
          _react2.default.createElement(
            'div',
            { className: 'col-md-2' },
            '\u8131\u8D2B\u5C5E\u6027\uFF1A'
          ),
          _react2.default.createElement(
            'div',
            { className: 'col-md-2' },
            this.props.page.cur.tp_property
          ),
          _react2.default.createElement('div', { className: 'col-md-1' }),
          _react2.default.createElement(
            'div',
            { className: 'col-md-2' },
            '\u8D2B\u56F0\u6237\u5C5E\u6027\uFF1A'
          ),
          _react2.default.createElement(
            'div',
            { className: 'col-md-2' },
            this.props.page.cur.poor_property
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'row' },
          _react2.default.createElement(
            'div',
            { className: 'col-md-2' },
            '\u81F4\u8D2B\u539F\u56E0\uFF1A'
          ),
          _react2.default.createElement(
            'div',
            { className: 'col-md-2' },
            this.props.page.cur.reason
          ),
          _react2.default.createElement('div', { className: 'col-md-1' }),
          _react2.default.createElement(
            'div',
            { className: 'col-md-2' },
            '\u4EBA\u5747\u6536\u5165\uFF1A'
          ),
          _react2.default.createElement(
            'div',
            { className: 'col-md-2' },
            this.props.page.cur.income
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'row' },
          _react2.default.createElement(
            'div',
            { className: 'col-md-2' },
            '\u9884\u8BA1\u8131\u8D2B\u5E74\u4EFD\uFF1A'
          ),
          _react2.default.createElement(
            'div',
            { className: 'col-md-2' },
            this.props.page.cur.tp_year
          ),
          _react2.default.createElement('div', { className: 'col-md-1' }),
          _react2.default.createElement(
            'div',
            { className: 'col-md-2' },
            '\u52B3\u52A1\u8F93\u51FA\uFF1A'
          ),
          _react2.default.createElement(
            'div',
            { className: 'col-md-2' },
            this.props.page.cur.export
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'row' },
          _react2.default.createElement(
            'div',
            { className: 'col-md-2' },
            '\u5371\u623F\u6539\u9020\u8BA1\u5212\uFF1A'
          ),
          _react2.default.createElement(
            'div',
            { className: 'col-md-2' },
            this.props.page.cur.house
          ),
          _react2.default.createElement('div', { className: 'col-md-1' }),
          _react2.default.createElement(
            'div',
            { className: 'col-md-2' },
            '\u8054\u7CFB\u7535\u8BDD\uFF1A'
          ),
          _react2.default.createElement(
            'div',
            { className: 'col-md-2' },
            this.props.page.cur.tel
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'row' },
          _react2.default.createElement(
            'div',
            { className: 'col-md-2' },
            '\u519C\u6751\u517B\u8001\u4FDD\u9669\uFF1A'
          ),
          _react2.default.createElement(
            'div',
            { className: 'col-md-2' },
            this.props.page.cur.vill_insur
          ),
          _react2.default.createElement('div', { className: 'col-md-1' }),
          _react2.default.createElement(
            'div',
            { className: 'col-md-2' },
            '\u57CE\u9547\u517B\u8001\u4FDD\u9669\uFF1A'
          ),
          _react2.default.createElement(
            'div',
            { className: 'col-md-2' },
            this.props.page.cur.town_insur
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'row' },
          _react2.default.createElement(
            'div',
            { className: 'col-md-2' },
            '\u65B0\u519C\u5408\u60C5\u51B5\uFF1A'
          ),
          _react2.default.createElement(
            'div',
            { className: 'col-md-2' },
            this.props.page.cur.medical_care
          ),
          _react2.default.createElement('div', { className: 'col-md-1' }),
          _react2.default.createElement(
            'div',
            { className: 'col-md-2' },
            '\u8BC1\u4EF6\u53F7\u7801\uFF1A'
          ),
          _react2.default.createElement(
            'div',
            { className: 'col-md-2' },
            this.props.page.cur.number
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'row' },
          _react2.default.createElement(
            'div',
            { className: 'col-md-2' },
            '\u5F00\u6237\u94F6\u884C\uFF1A'
          ),
          _react2.default.createElement(
            'div',
            { className: 'col-md-2' },
            this.props.page.cur.bank
          ),
          _react2.default.createElement('div', { className: 'col-md-1' }),
          _react2.default.createElement(
            'div',
            { className: 'col-md-2' },
            '\u94F6\u884C\u5361\u53F7\uFF1A'
          ),
          _react2.default.createElement(
            'div',
            { className: 'col-md-2' },
            this.props.page.cur.bank_number
          )
        )
      );
    }
  }]);

  return InfoPage;
}(_react2.default.Component);

var ArticlePage = function (_React$Component3) {
  _inherits(ArticlePage, _React$Component3);

  function ArticlePage(props) {
    _classCallCheck(this, ArticlePage);

    return _possibleConstructorReturn(this, (ArticlePage.__proto__ || Object.getPrototypeOf(ArticlePage)).call(this, props));
  }

  _createClass(ArticlePage, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'h1',
          { style: { textAlign: 'center' } },
          this.props.page.article.title
        ),
        _react2.default.createElement('div', { dangerouslySetInnerHTML: { __html: this.props.page.article.content } })
      );
    }
  }]);

  return ArticlePage;
}(_react2.default.Component);

var Content = function (_React$Component4) {
  _inherits(Content, _React$Component4);

  function Content(props) {
    _classCallCheck(this, Content);

    var _this9 = _possibleConstructorReturn(this, (Content.__proto__ || Object.getPrototypeOf(Content)).call(this, props));

    props.page.refresh = _this9.refresh.bind(_this9);
    _this9.state = {};
    return _this9;
  }

  _createClass(Content, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { id: 'content' },
        _react2.default.createElement(
          'div',
          { className: 'paper' },
          this.state.content
        )
      );
    }
  }, {
    key: 'refresh',
    value: function refresh() {
      var infoPage = _react2.default.createElement(InfoPage, { page: this.props.page });
      var articlePage = _react2.default.createElement(ArticlePage, { page: this.props.page });
      if (this.props.page.type == 0) {
        this.setState({ content: articlePage });
      } else {
        this.setState({ content: infoPage });
      }
    }
  }]);

  return Content;
}(_react2.default.Component);

var BaseInfo = function (_React$Component5) {
  _inherits(BaseInfo, _React$Component5);

  function BaseInfo() {
    _classCallCheck(this, BaseInfo);

    return _possibleConstructorReturn(this, (BaseInfo.__proto__ || Object.getPrototypeOf(BaseInfo)).apply(this, arguments));
  }

  _createClass(BaseInfo, [{
    key: 'render',
    value: function render() {
      var page = { cur: {}, refresh: null };
      return _react2.default.createElement(
        'div',
        { id: 'container' },
        _react2.default.createElement(Menu, { page: page }),
        _react2.default.createElement(Content, { page: page })
      );
    }
  }]);

  return BaseInfo;
}(_react2.default.Component);

exports.default = BaseInfo;
;
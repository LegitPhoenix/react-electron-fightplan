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

    _this.state = { towns: [], vills: [] };
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
          _this2.setState(_this2.state);
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
                    { href: 'javascript:void(0);', onClick: function onClick() {
                        var title = '全乡贫困户基本情况';
                        var heads = ['村别', '贫困户数', '一般贫困户', '低保户', '健康', '长期慢性病', '残疾', '中共党员', '文盲或半文盲', '学龄前儿童', '小学', '初中', '高中'];
                        var conds = [{}, { poor_property: '一般贫困户' }, { poor_property: '低保户' }, { health: '健康' }, { health: '长期慢性病' }, { health: '残疾' }, { political: '中共党员' }, { culture: '文盲或半文盲' }, { culture: '学龄前儿童' }, { culture: '小学' }, { culture: '初中' }, { culture: '高中' }];
                        _this3.queryPerson(title, heads, conds, town.id);
                      } },
                    '\u5168\u4E61\u8D2B\u56F0\u6237\u57FA\u672C\u60C5\u51B5'
                  )
                ),
                _react2.default.createElement(
                  'li',
                  null,
                  _react2.default.createElement(
                    'a',
                    { href: 'javascript:void(0);', onClick: function onClick() {
                        var title = '全乡总体预计脱贫计划汇';
                        var heads = ['村别', '2016 户数', '2017 户数', '2018 户数', '2019 户数', '合计户数'];
                        var conds = [{ tp_year: '2016' }, { tp_year: '2017' }, { tp_year: '2018' }, { tp_year: '2019' }, {}];
                        _this3.queryPerson(title, heads, conds, town.id);
                      } },
                    '\u5168\u4E61\u603B\u4F53\u8131\u8D2B\u8BA1\u5212\u6C47\u603B'
                  )
                ),
                _react2.default.createElement(
                  'li',
                  null,
                  _react2.default.createElement(
                    'a',
                    { href: 'javascript:void(0);', onClick: function onClick() {
                        var title = '全乡总体致贫原因汇总';
                        var heads = ['村别', '因病', '因残', '因学', '缺土地', '缺水', '缺技术', '缺劳力', '缺资金', '交通条件落后', '自身发展动力不足', '因灾', '因婚'];
                        var conds = [{ reason: '因病' }, { reason: '因残' }, { reason: '因学' }, { reason: '缺土地' }, { reason: '缺水' }, { reason: '缺技术' }, { reason: '缺劳力' }, { reason: '缺资金' }, { reason: '交通条件落后' }, { reason: '自身发展动力不足' }, { reason: '因灾' }, { reason: '因婚' }];
                        _this3.queryPerson(title, heads, conds, town.id);
                      } },
                    '\u5168\u4E61\u603B\u4F53\u81F4\u8D2B\u539F\u56E0\u6C47\u603B'
                  )
                ),
                _react2.default.createElement(
                  'li',
                  null,
                  _react2.default.createElement(
                    'a',
                    { href: 'javascript:void(0);', onClick: function onClick() {
                        var title = '全乡总体劳务输出汇总';
                        var heads = ['村别', '临时外出', '常年外出', '翻房', '维修'];
                        var rows = [];
                        var conds = [{ export: '临时外出' }, { export: '常年外出' }, { house: '翻房' }, { house: '维修' }];
                        _this3.queryPerson(title, heads, conds, town.id);
                      } },
                    '\u5168\u4E61\u603B\u4F53\u52B3\u52A1\u8F93\u51FA\u6C47\u603B'
                  )
                )
              ),
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
                          { href: 'javascript:void(0);', onClick: _this3.tpList.bind(_this3, vill.name, '2016') },
                          '2016 \u5E74\u9884\u8BA1\u8131\u8D2B\u540D\u5355'
                        )
                      ),
                      _react2.default.createElement(
                        'li',
                        null,
                        _react2.default.createElement(
                          'a',
                          { href: 'javascript:void(0);', onClick: _this3.tpList.bind(_this3, vill.name, '2017') },
                          '2017 \u5E74\u9884\u8BA1\u8131\u8D2B\u540D\u5355'
                        )
                      ),
                      _react2.default.createElement(
                        'li',
                        null,
                        _react2.default.createElement(
                          'a',
                          { href: 'javascript:void(0);', onClick: _this3.tpList.bind(_this3, vill.name, '2018') },
                          '2018 \u5E74\u9884\u8BA1\u8131\u8D2B\u540D\u5355'
                        )
                      ),
                      _react2.default.createElement(
                        'li',
                        null,
                        _react2.default.createElement(
                          'a',
                          { href: 'javascript:void(0);', onClick: _this3.tpList.bind(_this3, vill.name, '2019') },
                          '2019 \u5E74\u9884\u8BA1\u8131\u8D2B\u540D\u5355'
                        )
                      )
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
    key: 'queryPerson',
    value: function queryPerson(title, heads, conds, town_id) {
      var page = this.props.page;
      page.type = 1;
      page.data = {
        title: title,
        heads: heads,
        rows: []
      };
      _models.Vill.findAll({ where: { town_id: town_id } }).then(function (vills) {
        var p = new Promise(function (f) {
          return f();
        });
        vills.map(function (vill) {
          var row = [vill.name];
          conds.map(function (cond) {
            p = p.then(function () {
              cond.vill = vill.name;
              return _models.Person.findAll({ where: cond });
            }).then(function (data) {
              row.push(data.length);
            });
          });
          p.then(function (data) {
            page.data.rows.push(row);
          });
        });
        p.then(function () {
          page.refresh();
        });
      });
    }
  }, {
    key: 'queryPlan',
    value: function queryPlan(title, heads, conds, town_id) {
      var page = this.props.page;
      page.type = 1;
      page.data = {
        title: title,
        heads: heads,
        rows: []
      };
      _models.Vill.findAll({ where: { town_id: town_id } }).then(function (vills) {
        var p = new Promise(function (f) {
          return f();
        });
        vills.map(function (vill) {
          var row = [vill.name];
          conds.map(function (cond) {
            p = p.then(function () {
              cond.vill = vill.name;
              return _models.Plan.findAll({ where: cond });
            }).then(function (data) {
              row.push(data.length);
            });
          });
          p.then(function (data) {
            page.data.rows.push(row);
          });
        });
        p.then(function () {
          page.refresh();
        });
      });
    }
  }, {
    key: 'tpList',
    value: function tpList(vill, year) {
      var page = this.props.page;
      page.type = 1;
      page.data = {
        title: year + '预计脱贫名单',
        heads: ['编号', '姓名', '村别', '预计脱贫年份'],
        rows: []
      };

      _models.Person.findAll({ where: {
          vill: vill,
          tp_year: year
        } }).then(function (persons) {
        persons.forEach(function (person, index) {
          page.data.rows.push([index + 1 + '', person.name, person.vill, person.tp_year]);
        });
        page.refresh();
      });
    }
  }, {
    key: 'zjList',
    value: function zjList(vill, year) {
      var page = this.props.page;
      page.type = 1;
      page.data = {};
    }
  }]);

  return Menu;
}(_react2.default.Component);

var DataTable = function (_React$Component2) {
  _inherits(DataTable, _React$Component2);

  function DataTable(props) {
    _classCallCheck(this, DataTable);

    var _this4 = _possibleConstructorReturn(this, (DataTable.__proto__ || Object.getPrototypeOf(DataTable)).call(this, props));

    _this4.state = props.page.data;
    props.page.tableRefresh = _this4.refresh.bind(_this4);
    return _this4;
  }

  _createClass(DataTable, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'h2',
          { className: 'text-center' },
          this.state.title
        ),
        _react2.default.createElement(
          _reactBootstrap.Table,
          { bordered: true, striped: true },
          _react2.default.createElement(
            'thead',
            null,
            _react2.default.createElement(
              'tr',
              null,
              this.state.heads.map(function (head) {
                return _react2.default.createElement(
                  'th',
                  null,
                  head
                );
              })
            )
          ),
          _react2.default.createElement(
            'tbody',
            null,
            this.state.rows.map(function (row) {
              return _react2.default.createElement(
                'tr',
                null,
                row.map(function (data) {
                  return _react2.default.createElement(
                    'td',
                    null,
                    data
                  );
                })
              );
            })
          )
        )
      );
    }
  }, {
    key: 'refresh',
    value: function refresh() {
      this.setState(this.props.page.data);
    }
  }]);

  return DataTable;
}(_react2.default.Component);

var Content = function (_React$Component3) {
  _inherits(Content, _React$Component3);

  function Content(props) {
    _classCallCheck(this, Content);

    var _this5 = _possibleConstructorReturn(this, (Content.__proto__ || Object.getPrototypeOf(Content)).call(this, props));

    props.page.refresh = _this5.refresh.bind(_this5);
    _this5.state = { page: props.page };
    return _this5;
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
      var page = this.props.page;
      this.state.content = page.type == 0 ? _react2.default.createElement(Article, { page: page }) : _react2.default.createElement(DataTable, { page: page });
      this.setState(this.state);
      page.tableRefresh();
    }
  }]);

  return Content;
}(_react2.default.Component);

var Article = function (_React$Component4) {
  _inherits(Article, _React$Component4);

  function Article(props) {
    _classCallCheck(this, Article);

    var _this6 = _possibleConstructorReturn(this, (Article.__proto__ || Object.getPrototypeOf(Article)).call(this, props));

    props.data.articleRefresh = _this6.refresh.bind(_this6);
    return _this6;
  }

  _createClass(Article, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'h1',
        null,
        'Article!'
      );
    }
  }, {
    key: 'refresh',
    value: function refresh() {
      this.setState(this.state);
    }
  }]);

  return Article;
}(_react2.default.Component);

;

var Statistic = function (_React$Component5) {
  _inherits(Statistic, _React$Component5);

  function Statistic() {
    _classCallCheck(this, Statistic);

    return _possibleConstructorReturn(this, (Statistic.__proto__ || Object.getPrototypeOf(Statistic)).apply(this, arguments));
  }

  _createClass(Statistic, [{
    key: 'render',
    value: function render() {
      var page = { data: {} };
      return _react2.default.createElement(
        'div',
        { id: 'container' },
        _react2.default.createElement(Menu, { page: page }),
        _react2.default.createElement(Content, { page: page })
      );
    }
  }]);

  return Statistic;
}(_react2.default.Component);

exports.default = Statistic;
;

/**
<li><a href="javascript:void(0);" onClick={() => {
                  let title = '全乡总体收入情况汇总';
                  let heads = ['村别', '户主姓名', '打工收入', '年领取低保金', '在校生资助金', '领取捐助资金', '生产经营性收入', '财产性收入', '其他收入', '合计', '生产经营性支出', '医疗支出', '婚嫁支出', '其他支出', '合计'];
                  let rows = [];
                  let conds = [
                    {laowushuchu: '临时外出'},
                    {laowushuchu: '常年外出'},
                    {weifanggaizaojihua: '翻房'},
                    {weifanggaizaojihua: '维修'}
                  ];
                  this.queryPlan(title, heads, conds, town.id);
                }}>全乡总体收入情况汇总</a></li>

**/
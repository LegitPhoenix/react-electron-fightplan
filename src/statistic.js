import React from 'react';
import {PanelGroup, Panel, Button, Table} from 'react-bootstrap';
import {Town, Vill, Person} from './models.js';

class Menu extends React.Component {

  constructor(props) {
    super(props);
    this.state = {towns: [], vills: []};
  }

  componentDidMount() {
    Town.findAll().then(towns => {
      this.state.towns = towns.map(town => ({
        id: town.id,
        name: town.name
      }));
      Vill.findAll().then(vills => {
        this.state.vills = vills.map(vill => ({
          id: vill.id,
          town_id: vill.town_id,
          name: vill.name
        }));
        this.setState(this.state);
      });
    })
  }

 render() {
    return (
      <div id="menu">
        <PanelGroup accordion>
          {this.state.towns.map(town => (
            <Panel header={town.name} eventKey={town.id} key={town.id}>
              <ul>
                <li><a href="javascript:void(0);" onClick={() => {
                  var title = '全乡贫困户基本情况';
                  var heads = ['村别', '贫困户数', '一般贫困户', '低保户', '健康', '长期慢性病', '残疾', '中共党员', '文盲或半文盲', '学龄前儿童', '小学', '初中', '高中'];
                  var conds = [
                        {},
                        {poor_property: '一般贫困户'},
                        {poor_property: '低保户'},
                        {health: '健康'},
                        {health: '长期慢性病'},
                        {health: '残疾'},
                        {political: '中共党员'},
                        {culture: '文盲或半文盲'},
                        {culture: '学龄前儿童'},
                        {culture: '小学'},
                        {culture: '初中'},
                        {culture: '高中'}
                  ];
                  this.queryTown(title, heads, conds, town.id);
                }}>全乡贫困户基本情况</a></li>
                <li><a href="javascript:void(0);" onClick={() => {
                  var title = '全乡总体预计脱贫计划汇';
                  var heads = ['村别', '2016 户数', '2017 户数', '2018 户数', '2019 户数', '合计户数'];
                  var conds = [
                    {tp_year: '2016'},
                    {tp_year: '2017'},
                    {tp_year: '2018'},
                    {tp_year: '2019'},
                    {}
                  ];
                  this.queryTown(title, heads, conds, town.id);
                }}>全乡总体脱贫计划汇总</a></li>
                <li><a href="javascript:void(0);" onClick={() => {
                  var title = '全乡总体致贫原因汇总';
                  var heads = ['村别', '因病', '因残', '因学', '缺土地', '缺水', '缺技术', '缺劳力', '缺资金', '交通条件落后', '自身发展动力不足', '因灾', '因婚'];
                  var conds = [
                    {reason: '因病'},
                    {reason: '因残'},
                    {reason: '因学'},
                    {reason: '缺土地'},
                    {reason: '缺水'},
                    {reason: '缺技术'},
                    {reason: '缺劳力'},
                    {reason: '缺资金'},
                    {reason: '交通条件落后'},
                    {reason: '自身发展动力不足'},
                    {reason: '因灾'},
                    {reason: '因婚'}
                  ];
                  this.queryTown(title, heads, conds, town.id);
                }}>全乡总体致贫原因汇总</a></li>
                <li><a href="javascript:void(0);" onClick={() => {
                  var title = '全乡贫困户基本情况';
                  var heads = ['村别', '贫困户数', '一般贫困户', '低保户', '一般疾病', '大病', '残疾', '中共党员', '文盲', '小学', '初中', '高中', '大专以上'];
                  var conds = [
                        {},
                        {poor_property: '一般贫困户'},
                        {poor_property: '低保户'},
                        {health: '一般疾病'},
                        {health: '大病'},
                        {health: '残疾'},
                        {political: '中共党员'},
                        {culture: '文盲'},
                        {culture: '小学'},
                        {culture: '初中'},
                        {culture: '高中'},
                        {culture: '大专以上'}
                  ];
                  this.queryTown(title, heads, conds, town.id);
                }}>全乡总体劳务输出汇总</a></li>
                <li><a href="javascript:void(0);" onClick={() => {
                  var title = '全乡贫困户基本情况';
                  var heads = ['村别', '贫困户数', '一般贫困户', '低保户', '健康', '长期慢性病', '残疾', '中共党员', '文盲或半文盲', '学龄前儿童', '初中', '高中'];
                  var conds = [
                        {},
                        {poor_property: '一般贫困户'},
                        {poor_property: '低保户'},
                        {health: '健康'},
                        {health: '长期慢性病'},
                        {health: '残疾'},
                        {political: '中共党员'},
                        {culture: '文盲或半文盲'},
                        {culture: '学龄前儿童'},
                        {culture: '小学'},
                        {culture: '初中'},
                        {culture: '高中'}
                  ];
                  this.queryTown(title, heads, conds, town.id);
                }}>全乡总体收入情况汇总</a></li>
              </ul>
              <PanelGroup accordion>
                {this.state.vills.map(vill => {
                  if(vill.town_id == town.id) return (
                    <Panel header={vill.name} eventKey={vill.id} key={vill.id}>
                      <ul>
                        <li><a href="javascript:void(0);" onClick={this.tpList.bind(this, vill.name, '2016')}>2016 年预计脱贫名单</a></li>
                        <li><a href="javascript:void(0);" onClick={this.tpList.bind(this, vill.name, '2017')}>2017 年预计脱贫名单</a></li>
                        <li><a href="javascript:void(0);" onClick={this.tpList.bind(this, vill.name, '2018')}>2018 年预计脱贫名单</a></li>
                        <li><a href="javascript:void(0);" onClick={this.tpList.bind(this, vill.name, '2019')}>2019 年预计脱贫名单</a></li>
                      </ul>
                    </Panel>
                  );
                })}
              </PanelGroup>
            </Panel>
          ))}
        </PanelGroup>
      </div>
    );
  }

  queryTown(title, heads, conds, town_id) {
    var page = this.props.page;
    page.type = 1;
    page.data = {
      title: title,
      heads: heads,
      rows: []
    }
    Vill.findAll({where: {town_id: town_id}}).then(vills => {
      var p = new Promise(f => f());
      vills.map(vill => {
        var row = [vill.name];
        conds.map(cond => {
          p = p.then(() => {
            cond.vill = vill.name;
            return Person.findAll({where: cond});
          }).then(data => {
            row.push(data.length);
          });
        });
        p.then(data => {
          page.data.rows.push(row);
        });
      });
      p.then(() => {
        page.refresh();
      });
    });  
  }

  tpList(vill, year) {
    var page = this.props.page;
    page.type = 1;
    page.data = {
      title: year + '预计脱贫名单',
      heads: ['编号', '姓名', '村别', '预计脱贫年份'],
      rows: []
    };

    Person.findAll({where: {
      vill: vill,
      tp_year: year
    }}).then(persons => {
      persons.forEach((person, index) => {
        page.data.rows.push([index + 1 + '', person.name, person.vill, person.tp_year]);
      });
      page.refresh();
    });
  }

}

class DataTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.page.data;
    props.page.tableRefresh = this.refresh.bind(this);
  }

  render() {
    return (
      <div>
        <h2 className="text-center">{this.state.title}</h2>
        <Table bordered striped>
          <thead>
            <tr>
              {this.state.heads.map(head => (
                <th>{head}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {this.state.rows.map(row => (
              <tr>
                {row.map(data => (
                  <td>{data}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
  
  refresh() {
    this.setState(this.props.page.data);
  }
}

class Content extends React.Component {
  constructor(props) {
    super(props);
    props.page.refresh = this.refresh.bind(this);
    this.state = {page: props.page};
  }

  render() {
    return (
     <div id="content">
        <div className="paper">
          {this.state.content}
        </div>
      </div>
    );
  }

  refresh() {
    var page = this.props.page;
    this.state.content = page.type == 0 ? <Article page={page} /> : <DataTable page={page} />;
    this.setState(this.state);
    page.tableRefresh();
  }
}

class Article extends React.Component {
  constructor(props) {
    super(props);
    props.data.articleRefresh = this.refresh.bind(this);
  }

  render() {
    return <h1>Article!</h1>
  }
  
  refresh() {
    this.setState(this.state);
  }
};

export default class Statistic extends React.Component {
  render() {
    var page = {data: {}};
    return (
      <div id="container">
        <Menu page={page} />
        <Content page={page} />
      </div>
    );
  }
};




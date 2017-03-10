import React from 'react';
import {PanelGroup, Panel, Button} from 'react-bootstrap';
import {Town, Vill, Person} from './models.js';

class Menu extends React.Component {

  constructor(props) {
    super(props);
    this.state = {towns: [], vills: [], persons: []};
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
        Person.findAll().then(persons => {
          this.state.persons = persons.map(person => ({
            id: person.id,
            vill: person.vill,
            name: person.name,
          }));
          this.setState(this.state);
        });
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
                <li><a href="javascript:void(0);" onClick={this.getTownInfo.bind(this, town.id, 0)}>{town.name}基本信息介绍</a></li>
                <li><a href="javascript:void(0);" onClick={this.getTownInfo.bind(this, town.id, 1)}>{town.name}班子介绍</a></li>
              </ul>
              <hr />
              <PanelGroup accordion>
              {this.state.vills.map(vill => {
                  if(vill.town_id == town.id) return (
                    <Panel header={vill.name} eventKey={vill.id} key={vill.id}>
                      <ul>
                        <li><a href="javascript:void(0);" onClick={this.getVillInfo.bind(this, vill.id, 0)}>{vill.name}基本信息介绍</a></li>
                        <li><a href="javascript:void(0);" onClick={this.getVillInfo.bind(this, vill.id, 1)}>{vill.name}班子介绍</a></li>
                      </ul>
                      <hr />
                      <ul>
                        {this.state.persons.map(person => {
                          if(person.vill == vill.name) return (
                            <li key={person.id}><a href="javascript:void(0);" onClick={this.getPersonInfo.bind(this, person.id)} >{person.name}</a></li>
                          );
                        })}
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

  getTownInfo(id, type) {
    Town.findOne({where: {id: id}}).then(town => {
      this.props.page.article = {};
      if(type == 1) {
        this.props.page.article.title = town.name + '班子介绍';
        this.props.page.article.content = town.team;
      } else {
        this.props.page.article.title = town.name + '基本情况介绍';
        this.props.page.article.content = town.desc;
      }
      this.props.page.type = 0;
      this.props.page.refresh();
    });
  }
  
  getVillInfo(id, type) {
    Vill.findOne({where: {id: id}}).then(vill => {
      this.props.page.article = {};
      if(type == 1) {
        this.props.page.article.title = vill.name + '班子介绍';
        this.props.page.article.content = vill.team;
      } else {
        this.props.page.article.title = vill.name + '基本情况介绍';
        this.props.page.article.content = vill.desc;
      }
      this.props.page.type = 0;
      this.props.page.refresh();
    });
  }

  getPersonInfo(id) {
    Person.findOne({where: {id: id}}).then(person => {
      this.props.page.cur = person;
      this.props.page.type = 1;
      this.props.page.refresh();
    });
  }
}

class InfoPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {cur: props.page.cur};
  }

  render() {
    return (
      <div>
			  <h3>基本资料</h3>
			    <hr />
          <input type="hidden" id="pid" value="" />
          <div className="row">
            <div className="col-md-2">户主姓名：</div>
            <div className="col-md-2">{this.props.page.cur.name}</div>
            <div className="col-md-1"></div>
            <div className="col-md-2">性别：</div>
            <div className="col-md-2">{this.props.page.cur.sex}</div>
          </div>
          <div className="row">
            <div className="col-md-2">民族：</div>
            <div className="col-md-2">{this.props.page.cur.nation}</div>
            <div className="col-md-1"></div>
            <div className="col-md-2">与户主关系：</div>
            <div className="col-md-2">{this.props.page.cur.role}</div>
          </div>
          <div className="row">
            <div className="col-md-2">省份：</div>
            <div className="col-md-2">{this.props.page.cur.province}</div>
            <div className="col-md-1"></div>
            <div className="col-md-2">城市：</div>
            <div className="col-md-2">{this.props.page.cur.city}</div>
          </div>
          <div className="row">
            <div className="col-md-2">县：</div>
            <div className="col-md-2">{this.props.page.cur.county}</div>
            <div className="col-md-1"></div>
            <div className="col-md-2">镇：</div>
            <div className="col-md-2">{this.props.page.cur.town}</div>
          </div>
          <div className="row">
            <div className="col-md-2">行政村：</div>
            <div className="col-md-2">{this.props.page.cur.vill}</div>
            <div className="col-md-1"></div>
            <div className="col-md-2">户编号：</div>
            <div className="col-md-2">{this.props.page.cur.family}</div>
          </div>
          <div className="row">
            <div className="col-md-2">人编号：</div>
            <div className="col-md-2">{this.props.page.cur.person}</div>
            <div className="col-md-1"></div>
            <div className="col-md-2">人数：</div>
            <div className="col-md-2">{this.props.page.cur.count}</div>
          </div>
          <div className="row">
            <div className="col-md-2">文化程度：</div>
            <div className="col-md-2">{this.props.page.cur.culture}</div>
            <div className="col-md-1"></div>
            <div className="col-md-2">在校生状况：</div>
            <div className="col-md-2">{this.props.page.cur.school}</div>
          </div>
          <div className="row">
            <div className="col-md-2">健康状况：</div>
            <div className="col-md-2">{this.props.page.cur.health}</div>
            <div className="col-md-1"></div>
            <div className="col-md-2">劳动能力：</div>
            <div className="col-md-2">{this.props.page.cur.work}</div>
          </div>
          <div className="row">
            <div className="col-md-2">劳工状况：</div>
            <div className="col-md-2">{this.props.page.cur.labour}</div>
            <div className="col-md-1"></div>
            <div className="col-md-2">劳工时间：</div>
            <div className="col-md-2">{this.props.page.cur.labour_time}</div>
          </div>
          <div className="row">
            <div className="col-md-2">脱贫属性：</div>
            <div className="col-md-2">{this.props.page.cur.tp_property}</div>
            <div className="col-md-1"></div>
            <div className="col-md-2">贫困户属性：</div>
            <div className="col-md-2">{this.props.page.cur.poor_property}</div>
          </div>
          <div className="row">
            <div className="col-md-2">致贫原因：</div>
            <div className="col-md-2">{this.props.page.cur.reason}</div>
            <div className="col-md-1"></div>
            <div className="col-md-2">人均收入：</div>
            <div className="col-md-2">{this.props.page.cur.income}</div>
          </div>
          <div className="row">
            <div className="col-md-2">预计脱贫年份：</div>
            <div className="col-md-2">{this.props.page.cur.tp_year}</div>
            <div className="col-md-1"></div>
            <div className="col-md-2">劳务输出：</div>
            <div className="col-md-2">{this.props.page.cur.export}</div>
          </div>
          <div className="row">
          <div className="col-md-2">危房改造计划：</div>
            <div className="col-md-2">{this.props.page.cur.house}</div>
            <div className="col-md-1"></div>
            <div className="col-md-2">联系电话：</div>
            <div className="col-md-2">{this.props.page.cur.tel}</div>
          </div>
          <div className="row">
            <div className="col-md-2">农村养老保险：</div>
            <div className="col-md-2">{this.props.page.cur.vill_insur}</div>
            <div className="col-md-1"></div>
            <div className="col-md-2">城镇养老保险：</div>
            <div className="col-md-2">{this.props.page.cur.town_insur}</div>
          </div>
          <div className="row">
            <div className="col-md-2">新农合情况：</div>
            <div className="col-md-2">{this.props.page.cur.medical_care}</div>
            <div className="col-md-1"></div>
            <div className="col-md-2">证件号码：</div>
            <div className="col-md-2">{this.props.page.cur.number}</div>
          </div>
          <div className="row">
            <div className="col-md-2">开户银行：</div>
            <div className="col-md-2">{this.props.page.cur.bank}</div>
            <div className="col-md-1"></div>
            <div className="col-md-2">银行卡号：</div>
            <div className="col-md-2">{this.props.page.cur.bank_number}</div>
          </div>
      </div>
    );
  }
}

class ArticlePage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1 style={{textAlign: 'center'}}>{this.props.page.article.title}</h1>
        <div dangerouslySetInnerHTML={{__html: this.props.page.article.content}}></div>
      </div>
    );
  }
}

class Content extends React.Component {
  constructor(props) {
    super(props);
    props.page.refresh = this.refresh.bind(this);
    this.state = {}
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
    let infoPage = <InfoPage page={this.props.page} />
    let articlePage = <ArticlePage page={this.props.page} />
    if(this.props.page.type == 0) {
      this.setState({content: articlePage});
    } else {
      this.setState({content: infoPage});
    }
  }
}

export default class BaseInfo extends React.Component {
  render() {
    var page = {cur: {}, refresh: null}
    return (
      <div id="container">
        <Menu page={page} />
        <Content page={page} />
      </div>
    );
  }
};








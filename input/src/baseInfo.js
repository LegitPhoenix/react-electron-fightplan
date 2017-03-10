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
              <PanelGroup accordion>
              {this.state.vills.map(vill => {
                  if(vill.town_id == town.id) return (
                    <Panel header={vill.name} eventKey={vill.id} key={vill.id}>
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

  saveData(name) {
    this.props.page.cur[name] = this.refs[name].value;
    this.props.page.refresh();
    this.props.page.cur.save();
  }

  render() {
    return (
      <div>
			  <h3>基本资料</h3>
			    <hr />
          <input type="hidden" id="pid" value="" />
          <div className="row">
            <div className="col-md-2">户主姓名：</div>
            <div className="col-md-2"><input value={this.props.page.cur.name} ref="name" onChange={this.saveData.bind(this, 'name')} /></div>
            <div className="col-md-1"></div>
            <div className="col-md-2">性别：</div>
            <div className="col-md-2"><input value={this.props.page.cur.sex} ref="sex" onChange={this.saveData.bind(this, 'sex')} /></div>
          </div>
          <div className="row">
            <div className="col-md-2">民族：</div>
            <div className="col-md-2"><input value={this.props.page.cur.nation} ref="nation" onChange={this.saveData.bind(this, 'nation')} /></div>
            <div className="col-md-1"></div>
            <div className="col-md-2">与户主关系：</div>
            <div className="col-md-2"><input value={this.props.page.cur.role} ref="role" onChange={this.saveData.bind(this, 'role')} /></div>
          </div>
          <div className="row">
            <div className="col-md-2">省份：</div>
            <div className="col-md-2"><input value={this.props.page.cur.province} ref="province" onChange={this.saveData.bind(this, 'province')} /></div>
            <div className="col-md-1"></div>
            <div className="col-md-2">城市：</div>
            <div className="col-md-2"><input value={this.props.page.cur.city} ref="city" onChange={this.saveData.bind(this, 'city')} /></div>
          </div>
          <div className="row">
            <div className="col-md-2">县：</div>
            <div className="col-md-2"><input value={this.props.page.cur.county} ref="county" onChange={this.saveData.bind(this, 'county')} /></div>
            <div className="col-md-1"></div>
            <div className="col-md-2">镇：</div>
            <div className="col-md-2"><input value={this.props.page.cur.town} ref="town" onChange={this.saveData.bind(this, 'town')} /></div>
          </div>
          <div className="row">
            <div className="col-md-2">行政村：</div>
            <div className="col-md-2"><input value={this.props.page.cur.vill} ref="vill" onChange={this.saveData.bind(this, 'vill')} /></div>
            <div className="col-md-1"></div>
            <div className="col-md-2">户编号：</div>
            <div className="col-md-2"><input value={this.props.page.cur.family} ref="family" onChange={this.saveData.bind(this, 'family')} /></div>
          </div>
          <div className="row">
            <div className="col-md-2">人编号：</div>
            <div className="col-md-2"><input value={this.props.page.cur.person} ref="person" onChange={this.saveData.bind(this, 'person')} /></div>
            <div className="col-md-1"></div>
            <div className="col-md-2">人数：</div>
            <div className="col-md-2"><input value={this.props.page.cur.count} ref="count" onChange={this.saveData.bind(this, 'count')} /></div>
          </div>
          <div className="row">
            <div className="col-md-2">文化程度：</div>
            <div className="col-md-2"><input value={this.props.page.cur.culture} ref="culture" onChange={this.saveData.bind(this, 'culture')} /></div>
            <div className="col-md-1"></div>
            <div className="col-md-2">在校生状况：</div>
            <div className="col-md-2"><input value={this.props.page.cur.school} ref="school" onChange={this.saveData.bind(this, 'school')} /></div>
          </div>
          <div className="row">
            <div className="col-md-2">健康状况：</div>
            <div className="col-md-2"><input value={this.props.page.cur.health} ref="health" onChange={this.saveData.bind(this, 'health')} /></div>
            <div className="col-md-1"></div>
            <div className="col-md-2">劳动能力：</div>
            <div className="col-md-2"><input value={this.props.page.cur.work} ref="work" onChange={this.saveData.bind(this, 'work')} /></div>
          </div>
          <div className="row">
            <div className="col-md-2">劳工状况：</div>
            <div className="col-md-2"><input value={this.props.page.cur.labour} ref="labour" onChange={this.saveData.bind(this, 'labour')} /></div>
            <div className="col-md-1"></div>
            <div className="col-md-2">劳工时间：</div>
            <div className="col-md-2"><input value={this.props.page.cur.labour_time} ref="labour_time" onChange={this.saveData.bind(this, 'labour_time')} /></div>
          </div>
          <div className="row">
            <div className="col-md-2">脱贫属性：</div>
            <div className="col-md-2"><input value={this.props.page.cur.tp_property} ref="tp_property" onChange={this.saveData.bind(this, 'tp_property')} /></div>
            <div className="col-md-1"></div>
            <div className="col-md-2">贫困户属性：</div>
            <div className="col-md-2"><input value={this.props.page.cur.poor_property} ref="poor_property" onChange={this.saveData.bind(this, 'poor_property')} /></div>
          </div>
          <div className="row">
            <div className="col-md-2">致贫原因：</div>
            <div className="col-md-2"><input value={this.props.page.cur.reason} ref="reason" onChange={this.saveData.bind(this, 'reason')} /></div>
            <div className="col-md-1"></div>
            <div className="col-md-2">人均收入：</div>
            <div className="col-md-2"><input value={this.props.page.cur.income} ref="income" onChange={this.saveData.bind(this, 'income')} /></div>
          </div>
          <div className="row">
            <div className="col-md-2">预计脱贫年份：</div>
            <div className="col-md-2"><input value={this.props.page.cur.tp_year} ref="tp_year" onChange={this.saveData.bind(this, 'tp_year')} /></div>
            <div className="col-md-1"></div>
            <div className="col-md-2">劳务输出：</div>
            <div className="col-md-2">
              <select ref="export" onChange={this.saveData.bind(this, 'export')}>
                <option value="">未选择</option>
                <option value="常年外出">常年外出</option>
                <option value="临时外出">临时外出</option>
              </select>
            </div>
          </div>
          <div className="row">
            <div className="col-md-2">危房改造计划：</div>
            <div className="col-md-2">
              <select ref="house" onChange={this.saveData.bind(this, 'house')}>
                <option value="">未选择</option>
                <option value="翻房">翻房</option>
                <option value="维修">维修</option>
              </select>
            </div>
            <div className="col-md-1"></div>
            <div className="col-md-2">联系电话：</div>
            <div className="col-md-2"><input value={this.props.page.cur.tel} ref="tel" onChange={this.saveData.bind(this, 'tel')} /></div>
          </div>
          <div className="row">
            <div className="col-md-2">农村养老保险：</div>
            <div className="col-md-2"><input value={this.props.page.cur.vill_insur} ref="vill_insur" onChange={this.saveData.bind(this, 'vill_insur')} /></div>
            <div className="col-md-1"></div>
            <div className="col-md-2">城镇养老保险：</div>
            <div className="col-md-2"><input value={this.props.page.cur.town_insur} ref="town_insur" onChange={this.saveData.bind(this, 'town_insur')} /></div>
          </div>
          <div className="row">
            <div className="col-md-2">新农合情况：</div>
            <div className="col-md-2"><input value={this.props.page.cur.medical_care} ref="medical_care" onChange={this.saveData.bind(this, 'medical_care')} /></div>
            <div className="col-md-1"></div>
            <div className="col-md-2">证件号码：</div>
            <div className="col-md-2"><input value={this.props.page.cur.number} ref="number" onChange={this.saveData.bind(this, 'number')} /></div>
          </div>
          <div className="row">
            <div className="col-md-2">开户银行：</div>
            <div className="col-md-2"><input value={this.props.page.cur.bank} ref="bank" onChange={this.saveData.bind(this, 'bank')} /></div>
            <div className="col-md-1"></div>
            <div className="col-md-2">银行卡号：</div>
            <div className="col-md-2"><input value={this.props.page.cur.bank_number} ref="bank_number" onChange={this.saveData.bind(this, 'bank_number')} /></div>
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
        <pre>{this.props.page.article.content}</pre>
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
      console.log('good job');
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








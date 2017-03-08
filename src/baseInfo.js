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
                            <li key={person.id}><a href="javascript:void(0);" onClick={this.handleClick.bind(this, person.id)} >{person.name}</a></li>
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

  handleClick(id) {
    Person.findOne({where: {id: id}}).then(person => {
      this.props.page.cur = person;
      this.props.page.refresh();
    });
  }
}

class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {cur: props.page.cur};
    props.page.refresh = this.refresh.bind(this);
  }

  render() {
    return (
      <div id="content">
        <div className="paper">
			    <h3>基本资料</h3>
			      <hr />
            <input type="hidden" id="pid" value="" />
            <div className="row">
              <div className="col-md-2">户主姓名：</div>
              <div className="col-md-2">{this.state.cur.name}</div>
              <div className="col-md-1"></div>
              <div className="col-md-2">性别：</div>
              <div className="col-md-2">{this.state.cur.sex}</div>
            </div>
            <div className="row">
              <div className="col-md-2">民族：</div>
              <div className="col-md-2">{this.state.cur.nation}</div>
              <div className="col-md-1"></div>
              <div className="col-md-2">与户主关系：</div>
              <div className="col-md-2">{this.state.cur.role}</div>
            </div>
            <div className="row">
              <div className="col-md-2">省份：</div>
              <div className="col-md-2">{this.state.cur.province}</div>
              <div className="col-md-1"></div>
              <div className="col-md-2">城市：</div>
              <div className="col-md-2">{this.state.cur.city}</div>
            </div>
            <div className="row">
              <div className="col-md-2">县：</div>
              <div className="col-md-2">{this.state.cur.county}</div>
              <div className="col-md-1"></div>
              <div className="col-md-2">镇：</div>
              <div className="col-md-2">{this.state.cur.town}</div>
            </div>
            <div className="row">
              <div className="col-md-2">行政村：</div>
              <div className="col-md-2">{this.state.cur.vill}</div>
              <div className="col-md-1"></div>
              <div className="col-md-2">户编号：</div>
              <div className="col-md-2">{this.state.cur.family}</div>
            </div>
            <div className="row">
              <div className="col-md-2">人编号：</div>
              <div className="col-md-2">{this.state.cur.person}</div>
              <div className="col-md-1"></div>
              <div className="col-md-2">人数：</div>
              <div className="col-md-2">{this.state.cur.count}</div>
            </div>
            <div className="row">
              <div className="col-md-2">文化程度：</div>
              <div className="col-md-2">{this.state.cur.culture}</div>
              <div className="col-md-1"></div>
              <div className="col-md-2">在校生状况：</div>
              <div className="col-md-2">{this.state.cur.school}</div>
            </div>
            <div className="row">
              <div className="col-md-2">健康状况：</div>
              <div className="col-md-2">{this.state.cur.health}</div>
              <div className="col-md-1"></div>
              <div className="col-md-2">劳动能力：</div>
              <div className="col-md-2">{this.state.cur.work}</div>
            </div>
            <div className="row">
              <div className="col-md-2">劳工状况：</div>
              <div className="col-md-2">{this.state.cur.labour}</div>
              <div className="col-md-1"></div>
              <div className="col-md-2">劳工时间：</div>
              <div className="col-md-2">{this.state.cur.labour_time}</div>
            </div>
            <div className="row">
              <div className="col-md-2">脱贫属性：</div>
              <div className="col-md-2">{this.state.cur.tp_property}</div>
              <div className="col-md-1"></div>
              <div className="col-md-2">贫困户属性：</div>
              <div className="col-md-2">{this.state.cur.poor_property}</div>
            </div>
            <div className="row">
              <div className="col-md-2">致贫原因：</div>
              <div className="col-md-2">{this.state.cur.reason}</div>
              <div className="col-md-1"></div>
              <div className="col-md-2">人均收入：</div>
              <div className="col-md-2">{this.state.cur.income}</div>
            </div>
            <div className="row">
              <div className="col-md-2">联系电话：</div>
              <div className="col-md-2">{this.state.cur.tel}</div>
              <div className="col-md-1"></div>
              <div className="col-md-2">新农合情况：</div>
              <div className="col-md-2">{this.state.cur.medical_care}</div>
            </div>
            <div className="row">
              <div className="col-md-2">农村养老保险：</div>
              <div className="col-md-2">{this.state.cur.vill_insur}</div>
              <div className="col-md-1"></div>
              <div className="col-md-2">城镇养老保险：</div>
              <div className="col-md-2">{this.state.cur.town_insur}</div>
            </div>
            <div className="row">
              <div className="col-md-2">开户银行：</div>
              <div className="col-md-2">{this.state.cur.bank}</div>
              <div className="col-md-1"></div>
              <div className="col-md-2">银行卡号：</div>
              <div className="col-md-2">{this.state.cur.bank_number}</div>
            </div>
            <div className="row">
              <div className="col-md-2">证件号码：</div>
              <div className="col-md-2">{this.state.cur.number}</div>
              <div className="col-md-1"></div>
            </div>
        </div>
      </div>
    );
  }

  refresh() {
    this.setState({cur: this.props.page.cur});
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








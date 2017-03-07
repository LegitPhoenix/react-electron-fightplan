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
            vill_id: person.vill_id,
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
                          if(person.vill_id == vill.id) return (
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
      Vill.findOne({where: {id: person.vill_id}}).then(vill => {
        person.vill = vill.name;
        Town.findOne({where: {id: vill.town_id}}).then(town => {
          person.town = town.name;
          this.props.page.refresh();
        });
      });
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
              <div className="col-md-2">民族：</div>
              <div className="col-md-2">{this.state.cur.nation}</div>
            </div>
            <div className="row">
              <div className="col-md-2">所在乡：</div>
              <div className="col-md-2">{this.state.cur.town}</div>
              <div className="col-md-1"></div>
              <div className="col-md-2">所在村：</div>
              <div className="col-md-2">{this.state.cur.vill}</div>
            </div>
            <div className="row">
              <div className="col-md-2">健康状况：</div>
              <div className="col-md-2">{this.state.cur.health}</div>
              <div className="col-md-1"></div>
              <div className="col-md-2">文化程度：</div>
              <div className="col-md-2">{this.state.cur.culture}</div>
            </div>
            <div className="row">
              <div className="col-md-2">联系电话：</div>
              <div className="col-md-2">{this.state.cur.tel}</div>
              <div className="col-md-1"></div>
              <div className="col-md-2">政治面貌：</div>
              <div className="col-md-2">{this.state.cur.political}</div>
            </div>
            <div className="row">
              <div className="col-md-2">贫困户属性：</div>
              <div className="col-md-2">{this.state.cur.property}</div>
              <div className="col-md-1"></div>
            </div>

            <div className="row">
              <div className="col-md-2">致贫原因：</div>
              <div className="col-md-2">{this.state.cur.reason}</div>
              <div className="col-md-1"></div>
            </div>

            <div className="row">
              <div className="col-md-2">预计脱贫年份：</div>
              <div className="col-md-2">{this.state.cur.tp_year}</div>
              <div className="col-md-1"></div>
            </div>

            <div className="row">
              <div className="col-md-2">备注：</div>
              <div className="col-md-2">{this.state.cur.remark}</div>
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








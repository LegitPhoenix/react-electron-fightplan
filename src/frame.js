import React from 'react';
import {ipcRenderer} from 'electron';
import {Button} from 'react-bootstrap';
import {Carousel} from 'react-bootstrap';

import BaseInfo from './baseInfo.js';
import Statistic from './statistic.js';
import BigNews from './bigNews.js';

export class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state =  { title: props.page.title };

    props.page.setTitle = this.setTitle.bind(this);
  }

  render() {
    return (
      <div id="header">
        <h1>{this.state.title}</h1>
      </div>
    );
  }

  setTitle(str) {
    this.setState({title: str});
  }
}

export class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="footer">
        <div id="home">
            <Button bsStyle="primary" onClick={this.switchHomePage.bind(this)}>
              <span className="glyphicon glyphicon-home"></span>
            </Button>
        </div>
        
        <div id="nav">
          <Button bsStyle="success" onClick={this.switchBaseInfoPage.bind(this)}>基本情况介绍</Button>
          <Button bsStyle="success" onClick={this.switchStatisticPage.bind(this)}>扶贫攻坚工作计划</Button>
          <Button bsStyle="success" onClick={this.switchBigNewsPage.bind(this)}>扶贫攻坚大事记</Button>
        </div>
  
        <div id="exit">
          <Button bsStyle="danger" onClick={this.exitProgram.bind(this)}>
            <span className="glyphicon glyphicon-off"></span>
          </Button>
        </div>
      </div>
    );
  }
  
  switchHomePage() {
    this.props.page.setTitle('小徳营子乡精准脱贫攻坚作战计划');
    this.props.page.setContent(homePage);
  }

  switchBaseInfoPage() {
    this.props.page.setTitle('基本情况介绍');
    this.props.page.setContent(baseInfo);
  }

  switchStatisticPage() {
    this.props.page.setTitle('扶贫攻坚工作计划');
    this.props.page.setContent(statistic);
  }

  switchBigNewsPage() {
    this.props.page.setTitle('扶贫攻坚大事记');
    this.props.page.setContent(bigNews);
  }

  exitProgram() {
    ipcRenderer.send('exit');
  }
}

export class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {content: homePage};
    props.page.setContent = this.setContent.bind(this);
  }

  render() {
    return (<div>{this.state.content}</div>);
  }

  setContent(content) {
    this.setState({content: content});
  }
};

export class HomePage extends React.Component {
  render() {
    return (
      <div id="container" className="pic-box">
        <Carousel>
          <Carousel.Item>
            <img width={900} height={500} src="static/img/bg1.jpg"/>
          </Carousel.Item>
          <Carousel.Item>
            <img width={900} height={500} src="static/img/bg2.jpg"/>
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}

let homePage = <HomePage />;
let baseInfo = <BaseInfo />;
let statistic = <Statistic />;
let bigNews = <BigNews />;


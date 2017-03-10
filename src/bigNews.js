import React from 'react';
import {PanelGroup, Panel} from 'react-bootstrap';
import {Article} from './models.js'

class Menu extends React.Component {

  constructor(props) {
    super(props);
    this.state = {articles: []}
  }

  componentDidMount() {
    Article.findAll().then(articles => {
      this.setState({articles: articles});
    });
  }

 render() {
    return (
      <div id="menu">
        <PanelGroup accordion>
          <Panel header='新闻列表' eventKey="1">
            <ul>
              {this.state.articles.map(article => (
                <li><a href="javascript:void(0);" onClick={() => {
                  this.props.onSelect(article.id);
                }}>{article.title}</a></li>
              ))}
            </ul>
          </Panel>
        </PanelGroup>
      </div>
    );
  }
}

class Content extends React.Component {
  render() {
    return (
      <div id="content">
        <div className="paper">
          <h2 style={{textAlign: 'center'}}>{this.props.article.title}</h2>
          <h3 style={{textAlign: 'center'}}>{this.props.article.date}</h3>
          <hr />
          <div dangerouslySetInnerHTML={{__html: this.props.article.content}}></div>
        </div>
      </div>
    );
  }
}

export default class BigNews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {article: {}}
  }

  render() {
    return (
      <div id="container">
        <Menu onSelect={this.handleSelect.bind(this)} />
        <Content article={this.state.article} />
      </div>
    );
  }

  handleSelect(id) {
    Article.findOne({where: {id: id}}).then(article => {
      console.log(article.title);
      this.setState({article: article});
    });
  }
}















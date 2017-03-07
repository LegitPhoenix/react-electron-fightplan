import React from 'react';
import {render} from 'react-dom';

class H1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: props.page
    }
    props.page.refresh = this.refresh.bind(this);
  }

  render() {
    return <h1>{this.state.page.content}</h1>
  }

  refresh() {
    this.setState(this.state);
  }
}

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {content: props.page}
  }

  render() {
    return (
      <h2><a href="#" onClick={}>Link 1</a><h2>
      <h2><a href="#" onClick={}>Link 2</a><h2>
    );
  }
}

class Text extends React.Component {
  constructor(props) {
    super(props);
    this.state = {data: this.page
  }

  render() {
    return <div>{this.state.page.content}</div>
  } 
}

class Div extends React.Component {
  render() {
    var page = {};
    return (
      <div>
        {this.state.page.content}
      </div>
    );
  }
}

render(<Div />, document.getElementById('root'));



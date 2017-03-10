import React from 'react'

export default class Article extends React.Component {
  render() {
    return (
      <div>
        <h1 style={{textAlign: 'center'}}>{this.props.article.title}</h1>
        <h2 style={{textAlign: 'center'}}>{this.props.article.date}</h2>
        <hr />
        <pre>{this.props.article.content}</pre>
      </div>
    );
  }
}

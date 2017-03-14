import React from 'react';
import {render} from 'react-dom';

import {Header, Footer, Container} from './static/js/frame.js';

class App extends React.Component {
  render() {
    var page = {title: '小德营子乡精准脱贫攻坚作战计划'}
    return (
      <div>
        <Header page={page} />
        <Container page={page} />
        <Footer page={page} />
      </div>
    );
  }
}


render(<App />, document.getElementById('root'));









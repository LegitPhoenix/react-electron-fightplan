import React from 'react';
import {render} from 'react-dom';

import {Header, Footer, Container} from './static/js/frame.js';

let page = {
  title: '小徳营子乡精准脱贫攻坚作战计划',
  setTitle: () => null,
  setContent: () => null,
};

class App extends React.Component {
  render() {
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









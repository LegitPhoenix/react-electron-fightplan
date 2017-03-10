import React from 'react';
import {render} from 'react-dom';

import {Header, Footer, Container} from './static/js/frame.js';

class App extends React.Component {
  render() {
    var page = {}
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









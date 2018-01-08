import React, { Component } from 'react';
import Variables from './MetaComponents/Abstract/Variables';
import BaseStyles from './MetaComponents/Base';

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1>Style guide</h1>
        <Variables />
        <BaseStyles />
      </div>
    );
  }
}

export default App;

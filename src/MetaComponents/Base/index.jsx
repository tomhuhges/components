import React, { Component } from 'react';
import Typography from './Typography';
import Atomics from './Atomics';

class BaseStyles extends Component {
  render() {
    return (
      <section>
        <h2 className="section-header">Base styles</h2>
        <Typography />
        <Atomics />
      </section>
    );
  }

}

export default BaseStyles;

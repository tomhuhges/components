import React, { Component } from 'react';
import Fonts from '../Fonts';
import Colors from '../Colors';

class Variables extends Component {
  render() {
    return (
      <section>
        <h2 className="section-header">Variables</h2>
        <div className="row">
          <div className="col-xs-12 col-md-10">
            <p>Variables are grouped into Sass maps and they are accessed
              using a getter function. For example, the color blue is not
              accessed via a typical Sass variable, like:
            </p>
            <blockquote><pre>color: $blue;</pre></blockquote>
            <p>but instead a function call, like so:</p>
            <blockquote><pre>color: color(blue);</pre></blockquote>
          </div>
        </div>
        <Fonts />
        <Colors />
      </section>
    );
  }

}

export default Variables;

import React, { Component } from 'react';

class Atomics extends Component {

  render() {
    return (
      <div className="atomics">
        <h3 className="section-header">Atomic elements</h3>
        <div className="row">
          <div className="col-xs-12">
            <h4>&lt;a&gt;</h4>
            <a href="#">Link example</a>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-sm-4">
            <h4>&lt;button&gt;</h4>
            <button href="#">Button example</button>
          </div>
          <div className="col-xs-12 col-sm-4">
          <h4>&lt;button class="outline"&gt;</h4>
          <button className="outline" href="#">Outlined button example</button>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-sm-4">
            <h4>&lt;input type="text"&gt;</h4>
            <input type="text" placeholder="Type your info..." />
          </div>
          <div className="col-xs-12 col-sm-4">
            <h4>&lt;input type="text" class="is-valid"&gt;</h4>
            <input type="text" className="is-valid" placeholder="Type your info..." value="Valid input"/>
          </div>
          <div className="col-xs-12 col-sm-4">
            <h4>&lt;input type="text" class="is-invalid"&gt;</h4>
            <input type="text" className="is-invalid" placeholder="Type your info..." value="Invalid input OR 1=1"/>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-sm-4 input--w-label">
            <h4>&lt;input type="text" class="input--w-label"&gt;</h4>
            <input id="input" type="text" placeholder="Type your info..." />
            <label htmlFor="input">Input Label</label>
          </div>
        </div>
      </div>
    );
  }

}

export default Atomics;

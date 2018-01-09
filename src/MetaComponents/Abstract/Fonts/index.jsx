import React, { Component } from 'react';

const fonts = [
  { name: 'sans-serif', font: 'Proxima Nova', type: 'Sausages in between a glass.'},
  { name: 'monospace', font: 'Roboto Mono', type: 'Very well very well, washing is old, washing is washing.' },
];

class Fonts extends Component {
  render() {
    return (
      <div>
        <h3 className="section-header">Fonts</h3>
        <div className="row">
          {fonts.map(font => (
            <div key={font.name} className="col-xs-12">
              <div className="row">
                <div className="col-xs-12 col-sm-6">
                  <h3>{ font.font }</h3>
                  <pre>{`font('${font.name}')`}</pre>
                </div>
                <div className="col-xs-12 col-sm-6">
                  <h1 className={font.name}>{ font.type }</h1>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

}

export default Fonts;

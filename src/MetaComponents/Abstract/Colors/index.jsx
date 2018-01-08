import React, { Component } from 'react';

const colors = [
  { name: 'blue', code: 'color(blue)', hex: '#4343FF' },
  { name: 'blue-mid', code: 'color(blue, mid)', hex: '#9494FF' },
  { name: 'blue-light', code: 'color(blue, light)', hex: '#C4C4FF' },
  { name: 'blue-pale', code: 'color(blue, pale)', hex: '#EDEDFF' },
  { name: 'red', code: 'color(red)', hex: '#FF4F4F' },
  { name: 'red-mid', code: 'color(red, mid)', hex: '#FF9494' },
  { name: 'red-light', code: 'color(red, light)', hex: '#FFC4C4' },
  { name: 'red-pale', code: 'color(red, pale)', hex: '#FFEDED' },
  { name: 'green', code: 'color(green)', hex: '#11E081' },
  { name: 'green-mid', code: 'color(green, mid)', hex: '#71F4B7' },
  { name: 'green-light', code: 'color(green, light)', hex: '#A0F8CF' },
  { name: 'green-pale', code: 'color(green, pale)', hex: '#E3FDF1' },
  { name: 'yellow', code: 'color(yellow)', hex: '#FFD700' },
  { name: 'yellow-mid', code: 'color(yellow, mid)', hex: '#FFED85' },
  { name: 'yellow-light', code: 'color(yellow, light)', hex: '#FFF6C2' },
  { name: 'yellow-pale', code: 'color(yellow, pale)', hex: '#FFFAE0' },
  { name: 'black', code: 'color(black)', hex: '#333' },
  { name: 'grey', code: 'color(grey)', hex: '#666' },
  { name: 'grey-mid', code: 'color(grey, mid)', hex: '#999' },
  { name: 'grey-light', code: 'color(grey, light)', hex: '#CCC' },
  { name: 'grey-pale', code: 'color(grey, pale)', hex: '#EEE' },
  { name: 'white', code: 'color(white)', hex: '#FFF' },
];

class VariableColor extends Component {
  render() {
    return (
      <div>
        <h3 className="section-header">Colors</h3>
        <div className="row">
          {colors.map(color => (
            <div key={color.name} className="color__container col-xs-6 col-sm-4 col-md-3">
              <h3 className={color.name}>{color.name}</h3>
              <div className={`color__display bg-${color.name}`} />
              <code>
                {`${color.code}\n
                ${color.hex}`}
              </code>
            </div>
          ))}
        </div>
      </div>
    );
  }

}

export default VariableColor;

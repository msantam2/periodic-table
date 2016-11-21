import React from 'react';

class ChemicalElement extends React.Component {
  render() {
    let color = {
      background: `${this.props.color}`};

    return (
      <td className='chemical-element' style={color}>
        <p className='atomic-info'>{this.props.element.atomicNumber}</p>
        <div className='atomic-wrapper'>
          <p className='atomic-info'>{this.props.element.symbol}</p>
          <p className='atomic-info atomic-name'>{this.props.element.name}</p>
          <p className='atomic-info atomic-mass'>{this.props.element.atomicMass}</p>
        </div>
      </td>
    )
  }
}

export default ChemicalElement;

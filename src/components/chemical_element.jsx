import '../stylesheets/chemical_element';
import React from 'react';
import { hashHistory } from 'react-router';

class ChemicalElement extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    hashHistory.push(`/${this.props.element.name}`);
  }

  render() {
    let groupClass;
    if (this.props.groupClass.includes(' ')) {
      groupClass = this.props.groupClass.replace(/ /g, '-');
    } else {
      groupClass = this.props.groupClass;
    }

    return (
      <td onClick={this.handleClick} className={`chemical-element ${groupClass}`}>
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

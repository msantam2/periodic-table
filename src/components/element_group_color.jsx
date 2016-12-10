import React from 'react'; 
import $ from 'jquery'; 

class ElementGroupColor extends React.Component {
  constructor(props) {
    super(props); 
    this.handleEnter = this.handleEnter.bind(this);
    this.handleLeave = this.handleLeave.bind(this);
  }
  // on mouse enter, highlight only elements belonging to group
  handleEnter(groupClass) {
    $(`.chemical-element:not(.${groupClass}), .range-cell, .element-group:not(.${groupClass})`).toggleClass('gray-background');
  }
  // on mouse leave, reset all element background colors
  handleLeave(groupClass) {
    $(`.chemical-element:not(.${groupClass}), .range-cell, .element-group:not(.${groupClass})`).toggleClass('gray-background');
  }

  render() {
    let group = this.props.group; 
    let groupClass; 

    if (group.includes(' ')) {
      groupClass = group.replace(/ /g, '-');
    } else {
      groupClass = group;
    }

    return (
      <td className={`element-group ${groupClass}`} onMouseEnter={this.handleEnter.bind(null, groupClass)} onMouseLeave={this.handleLeave.bind(null, groupClass)}>
        <p className='element-group-text'>{group}</p>
      </td>
    );
  }
}

export default ElementGroupColor; 
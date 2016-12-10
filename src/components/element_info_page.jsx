import React from 'react';
import ElementHistories from 'element-histories';
import { Link } from 'react-router';

class ElementInfoPage extends React.Component {
  render() {
    let name = this.props.params['elementName'];

    return (
      <div>
        <Link to='/'>Back</Link>
        <h1>{name}</h1>
        <img src={`${ElementHistories.image(name)}`} />
        <p>{ElementHistories.story(name)}</p>
      </div>
    )
  };
};

export default ElementInfoPage;

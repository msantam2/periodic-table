import '../stylesheets/element_info_page';
import React from 'react';
import ElementHistories from 'element-histories';
import { Link } from 'react-router';
import GoogleMap from './google_map'; 

class ElementInfoPage extends React.Component {
  render() {
    let name = this.props.params['elementName'];

    return (
      <div>
        <Link to='/'>Back</Link>
        <h1>{name}</h1>
        <p>{ElementHistories.country(name)}</p>
        <GoogleMap country={ElementHistories.country(name)} />
        <img className='element-photo' src={`${ElementHistories.image(name)}`} />
        <p>{ElementHistories.story(name)}</p>
      </div>
    )
  };
};

export default ElementInfoPage;

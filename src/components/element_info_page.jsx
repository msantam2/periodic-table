import '../stylesheets/element_info_page';
import React from 'react';
import ElementHistories from 'element-histories';
import { Link } from 'react-router';
import GoogleMap from './google_map';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper'; 

class ElementInfoPage extends React.Component {
  render() {
    let name = this.props.params['elementName'];

    return (
      <div>
        <p className='element-name'><Link className='back-btn' to='/'>&#10094;</Link> {name}</p>
        <GoogleMap className='google-map' country={ElementHistories.country(name)} />
        <MuiThemeProvider>
          <Paper className='paper-bottom' zDepth={5}>
            <p className='element-story'>{ElementHistories.story(name)}</p>
            <img className='element-photo' src={`${ElementHistories.image(name)}`} />
          </Paper>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default ElementInfoPage;

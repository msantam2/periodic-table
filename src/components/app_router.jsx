import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app';
import PeriodicTable from './periodic_table';
import ElementInfoPage from './element_info_page';

class AppRouter extends React.Component {
  render() {
    return (
      <Router history={ hashHistory }>
        <Route path='/' component={ App }>
          <IndexRoute component={ PeriodicTable } />
          <Route path='/:elementName' component={ ElementInfoPage } />
        </Route>
      </Router>
    );
  }
}

export default AppRouter;

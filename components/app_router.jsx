import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import App from './app';
import PeriodicTable from './periodic_table';

class AppRouter extends React.Component {
  render() {
    return (
      <Router>
        <Route path='/' component={ App }>
          <IndexRoute component={ PeriodicTable } />
        </Route>
      </Router>
    ); 
  }
}

export default AppRouter;

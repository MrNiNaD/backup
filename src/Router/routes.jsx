import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from '../pages/Homepage';

const Routes = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route path='/' component={HomePage} />
        </Switch>
      </Router>
    </div>
  );
};

export default Routes;

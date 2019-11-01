import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { ShopDataStore } from './data/DataStore';
import { Connector } from './shop/Connector';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
    <Provider store={ ShopDataStore }>
      <Router>
        <Switch>
          <Route path="/home" component={ Connector } />
          <Redirect to="/home" />
        </Switch>
      </Router> 
    </Provider>
    )
  }
}



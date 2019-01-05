import React, {Component} from 'react';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import App from '../App';
import Home from '../containers/Home/';
import List from '../containers/List';
import Detail from '../containers/Detail';
import NotFound from '../containers/NotFound';

class RouteMap extends Component {
  updateHandle = () => {
    console.log('每次router变化之后会触发');
  }
  render() {
    return (
      <Router>
        <App>
          <Switch onUpdate={this.updateHandle}>
            <Route path='/detail/:id' component={Detail}></Route>
            <Route path='/list' component={List}></Route>
            <Route path='/' exact component={Home}></Route>
            <Route path="*" component={NotFound}></Route>
          </Switch>
        </App>
      </Router>
    )
  }
}

export default RouteMap;
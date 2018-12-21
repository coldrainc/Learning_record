import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Home extends Component{
  render() {
    return (
      <div>
        <p>Home</p>
        <Link to='/list'>to list</Link>
      </div>
    )
  };
}

export default Home;
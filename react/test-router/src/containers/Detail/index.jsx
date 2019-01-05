import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

class Detail extends Component {
  render() {
    const {match} = this.props;
    let id = match.params.id
    return (
      <div>
        <p>Detail, url参数{id}</p>
        <NavLink to="/">to home</NavLink>
      </div>
    );
  }
}

export default Detail;
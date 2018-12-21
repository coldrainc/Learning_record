import React, {Component} from 'react';

class Detail extends Component {
  render() {
    return (
      <p>Detail, url参数{this.props.params.id}</p>
    );
  }
}

export default Detail;
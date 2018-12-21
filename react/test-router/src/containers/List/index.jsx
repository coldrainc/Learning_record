import React, {Component} from 'react';

class List extends Component {
  render() {
    const arr = [1, 2, 3];
    return (
      <ul>
        {
          arr.map((item, index) => (
            <li key={index} onClick={() => this.clickHandle(item)}>
              js jump to {item}
            </li>
          ))
        }
      </ul>
    );
  }
  clickHandle = (value) => {
    const {history} = this.props;
    history.push('/detail/' + value);
  }
}

export default List;
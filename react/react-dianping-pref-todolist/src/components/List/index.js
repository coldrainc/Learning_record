import React, {Component} from 'react';

class List extends Component {

  render() {
    let datas = this.props.todos;
    return (
      <ul style={{marginTop: '10px', fontSize: '20px', lineHeight: '30px'}}>
        {
          datas.map((data, index) => (
            <li 
              key={index}
              onClick={() => this.clickHandle(data.id)}
            >
              {data.text}
            </li>
          ))
        }
      </ul>
    );
  }
  clickHandle = (id) => {
    this.props.deleteFn(id);
  }
}

export default List;
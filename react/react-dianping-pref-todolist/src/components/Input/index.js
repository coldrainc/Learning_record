import React, {Component} from 'react';

class Input extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      value: ''
    }
  }
  render() {
    return (
      <div>
        <input 
          value={this.state.value} 
          type="text"
          style={{width: '80%', height: '40px', fontSize: '35px'}}
          onChange={this.changeHandle}
          onKeyUp={this.keyUpHandle}
        />
      </div>
    );
  }
  changeHandle = (e) => {
    this.setState({
      value: e.target.value
    })
  }
  keyUpHandle = (e) => {
    const value = this.state.value;
    if(e.keyCode === 13 && value.trim()){
      this.props.submitFn(value);
      this.setState({
        value: ''
      })
    }
  }
}

export default Input;
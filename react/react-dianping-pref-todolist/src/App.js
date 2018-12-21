import React, { Component } from 'react';
import './App.css';
import Input from './components/Input/';
import List from './components/List/';

class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      todos: []
    }
  }
  render() {
    return (
      <div className="App">
        <Input submitFn={this.submitFn}></Input>
        <List deleteFn={this.deleteFn} todos={this.state.todos}></List>
      </div>
    );
  }
  submitFn = (value) => {
    let todos = this.state.todos;
    const id = todos.lenght;
    this.setState({
      todos: todos.concat({
        id: id,
        text: value
      })
    })
  }
  deleteFn = (id) => {
    let todos = this.state.todos;
    this.setState({
      todos: todos.filter((todo) => {
        return todo.id !== id;
      })
    })
  }
}

export default App;

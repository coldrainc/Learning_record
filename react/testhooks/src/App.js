import React, { createContext } from 'react';
import logo from './logo.svg';
import { useState, useReducer } from 'react';
import Navbar from './components/Navbar';
import Messages from './components/Messages';
import AppContext from './context/appContext';

import './App.css';

function myReducer(state, action) {
  switch(action.type) {
    case 'ADD': 
      return {
        count: state.count + 1
      }
    default: 
      return state;
  }
}

function App() {
  const initialState = 'Click me, please'
  const [ btnText, setBtnText ] = useState(initialState)
  const [ state, dispatch ] = useReducer(myReducer, { count: 0})
  function handleClick() {
    return setBtnText('Thanks, been clicked');
  }
  return (
    <AppContext.Provider value={{username: 'superman', password: 'super'}}>
      <div className="App">
        <div className="btn" onClick={() => setBtnText('test')}>{btnText}</div>
        <Navbar/>
        <Messages/>
        <button onClick={() => dispatch({type: 'ADD'})}>{state.count}</button>
      </div>
    </AppContext.Provider>
  );
}

export default App;

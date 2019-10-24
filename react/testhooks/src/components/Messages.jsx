import React from 'react';
import AppContext from '../context/appContext';

function Messages() {
  return (
    <AppContext.Consumer>
      {({ password }) => (<div>{ password }</div>)}
    </AppContext.Consumer>
  )
}

export default Messages;
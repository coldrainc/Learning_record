import React, { useContext } from 'react';
import AppContext from '../context/appContext';

function Navbar(props) {
  const  { username } = useContext(AppContext)
  return (
    <div>{username}</div>
  )
}

export default Navbar;
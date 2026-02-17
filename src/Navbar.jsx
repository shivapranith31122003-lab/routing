import React from 'react'
import "./navbar.css"
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div id='nav'>
      <h1>Pranith Solutions</h1>

      <div id='nav_link'>
        <Link to="/counter">Counter</Link>
        <Link to="/Bgchanger">Bgchanger</Link>
        <Link to="/Inputhandler">Inputhandler</Link>
        
      </div>
    </div>
  )
}

export default Navbar

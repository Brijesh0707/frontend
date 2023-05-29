import React from 'react'

import './App.css';
import Menu from './images/menu.png';
import { NavLink} from 'react-router-dom'
const Navbar = () => {
  return (
   <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
  <NavLink to="/">
  <a class="navbar-brand" href="#">Brij AI</a>
  </NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <img src={Menu} alt="Bootstrap" width="30" height="24" id='logo1'/>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
        <NavLink to="/">
         <a className="nav-link" href="#">Home</a>
         </NavLink>
        </li>
        <li className="nav-item">
        <NavLink to="/chat">
          <a className="nav-link" href="#">Chat</a>
          </NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
   </>
  )
}

export default Navbar
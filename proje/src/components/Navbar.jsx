import React from "react";
import { NavLink, Link } from "react-router-dom";

function Navbar({user, handleLogOut}) {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
  <div className="container">
    <a className="navbar-brand" href="#">BESAŞ SATIŞ NOKTALARI</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <NavLink className="nav-link" to="/">Ana Sayfa</NavLink>
        <NavLink className="nav-link" to="/stores">Satış Noktaları</NavLink>
        <NavLink className="nav-link" to="/about">Hakkımızda</NavLink>
        
        
        {

        
          user?
          <button className="nav-link" onClick={handleLogOut}>Logout ({user.name})</button>:
          <NavLink className="nav-link" to="/login">Login</NavLink>
        }

        

       
      </ul>
    </div>
  </div>
</nav>
   
  )
}

export default Navbar;

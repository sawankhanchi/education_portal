import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <NavLink className="navbar-brand" to="/">EduKated</NavLink>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
          <NavLink activeClassName="menu_active" exact className="nav-link" to="/">Home <span className="sr-only">(current)</span></NavLink>
          </li>

          <li className="nav-item">
          <NavLink activeClassName="menu_active" className="nav-link" to="/discover">Discover</NavLink>
          </li>
          
          <li className="nav-item">
          <NavLink activeClassName="menu_active" className="nav-link" to="/message">Message</NavLink>
          </li>

          <li className="nav-item">
          <NavLink activeClassName="menu_active" className="nav-link" to="/setting">Setting</NavLink>
          </li>

          </ul>
         </div>
         </nav>
        </>
    );
};

export default Navbar;
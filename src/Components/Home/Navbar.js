
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
      <nav style={{backgroundColor:'darkolivegreen'}}  className="navbar navbar-expand-lg navbar-light ">
      <div className="container-fluid">
      <Link className="navbar-brand text-white" to="/">MJH</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav ">
      <li className="nav-item active">
        <Link  className="nav-link text-white" to="/">Home</Link>
      </li>
      <li className="nav-item">
        <Link  className="nav-link text-white" to="/contact">Contact</Link>
      </li>
      <li className="nav-item">
        <Link  className="nav-link text-white" to="/blogs">Blogs</Link>
      </li>
      <li className="nav-item">
        <Link  className="nav-link text-white" to="/resume">Resume</Link>
      </li>
      <li className="nav-item">
        <Link  className="nav-link text-white" to="/projects">Projects</Link>
      </li>
    </ul>
        </div>
      </div>
    </nav>

    );
};

export default Navbar;


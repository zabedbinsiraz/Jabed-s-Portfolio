
import React from 'react';
import { Link } from 'react-router-dom';



const Navbar = () => {
    return (
      <nav style={{backgroundColor:'darkolivegreen'}}  className=" text-center navbar navbar-expand-lg navbar-light bg-success  p-2">
      <div className="container-fluid ">
      <Link style={{fontSize:'1em', fontWeight:'revert'}} className="navbar-brand text-white me-5" to="/">JABED</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarNavDropdown">
        <ul className="navbar-nav ">
      <li className="nav-item active">
        <Link style={{fontSize:'1em', fontWeight:'lighter'}} className="nav-link text-white" to="/">Home</Link>
      </li>
      <li className="nav-item">
        <Link style={{fontSize:'1em', fontWeight:'lighter'}} className="nav-link text-white" to="/contact">Contact</Link>
      </li>
      <li className="nav-item">
        <Link style={{fontSize:'1em', fontWeight:'lighter'}} className="nav-link text-white" to="/blogs">Blogs</Link>
      </li>
      <li className="nav-item">
        <Link style={{fontSize:'1em', fontWeight:'lighter'}} className="nav-link text-white" to="/resume">Resume</Link>
      </li>
      <li className="nav-item">
        <Link style={{fontSize:'1em', fontWeight:'lighter'}}  className="nav-link text-white" to="/projects">Projects</Link>
      </li>
    </ul>
        </div>
      </div>
    </nav>

    );
};

export default Navbar;


import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
      <nav  style={{backgroundColor:'darkolivegreen'}} class="navbar navbar-expand-lg navbar-light ">
      <div class="container-fluid">
        <a class="navbar-brand text-white" href="#">MJH</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav ">
      <li class="nav-item active">
        <Link  class="nav-link text-white" to="/">Home</Link>
      </li>
      <li class="nav-item">
        <Link  class="nav-link text-white" to="/contact">Contact</Link>
      </li>
      <li class="nav-item">
        <Link  class="nav-link text-white" to="/blogs">Blogs</Link>
      </li>
      <li class="nav-item">
        <Link  class="nav-link text-white" to="/resume">Resume</Link>
      </li>
      <li class="nav-item">
        <Link  class="nav-link text-white" to="/projects">Projects</Link>
      </li>
    </ul>
        </div>
      </div>
    </nav>

    );
};

export default Navbar;


import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar">
    <Link to="/"> <h2 className="title is-2"><i className="fa fa-star" aria-hidden="true" />   ZODIAC UNIVERSITY</h2> </Link>
      <div className="nav-links">
        <Link to="/campus"><button className="button is-dark navbutton">Campuses</button></Link>
        <Link to="/student"><button className="button is-dark navbutton">Students</button></Link>
    </div>
  </nav>
);

export default Navbar;


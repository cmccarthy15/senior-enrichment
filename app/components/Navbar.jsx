import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar">
    <Link to="/"> <h2>ZODIAC UNIVERSITY</h2> </Link>
      <div className='nav-links'>
        <Link to="/campus"><button>Campuses</button></Link>
        <Link to="/student"><button>Students</button></Link>
    </div>
  </nav>
);

export default Navbar;


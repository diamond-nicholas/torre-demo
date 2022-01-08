import React from 'react';
import Menu from '../vectors/Menu';
import SearchIcon from '../vectors/SearchIcon';
import '../styles/Navbar.css';
const Navbar = () => {
  return (
    <div className='navbar'>
      <nav className='left'>
        <Menu />
        <p>
          torre<span>.co</span>
        </p>
      </nav>
      <nav className='right'>
        <SearchIcon />
        <p>SIGN IN</p>
      </nav>
    </div>
  );
};

export default Navbar;

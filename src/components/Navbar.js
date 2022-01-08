import React from 'react';
import Menu from '../vectors/Menu';
import SearchIcon from '../vectors/SearchIcon';
const Navbar = () => {
  return (
    <div>
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

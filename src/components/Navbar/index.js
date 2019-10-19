import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaAlignRight } from 'react-icons/fa';
import Logo from '../../images/logo.svg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className='navbar'>
      <div className='nav-center'>
        <div className='nav-header'>
          <Link to='/'>
            <img src={Logo} alt='logo' />
          </Link>
          <button className='nav-btn' onClick={handleOpen}>
            <FaAlignRight className='nav-icon' />
          </button>
        </div>
        <ul className={isOpen ? 'nav-links show-nav' : 'nav-links'}>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/rooms'>Rooms</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

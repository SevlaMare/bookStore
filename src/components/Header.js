import React from 'react';

const Header = () => (
  <header className='header'>
    <nav>
      <ul>
        <li className="logo">Bookstore</li>
        <li className="nav-item-2">BOOKS</li>
        <li className="nav-item-3">CATEGORIES</li>
      </ul>
    </nav>
    <div>
      <div className="login">
        <img className="img-logo" src="img/profile.png" />
      </div>
    </div>
  </header>
);

export default Header;
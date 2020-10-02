import React from 'react';

const Header = () => (
  <header className='header'>
    <nav>
      <ul>
        <li>Bookstore</li>
        <li>BOOKS</li>
        <li>CATEGORIES</li>
      </ul>
    </nav>
    <div>
      <div className="login">
        <img src="img/profile.png" />
      </div>
    </div>
  </header>
);

export default Header;
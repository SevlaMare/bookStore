import React from 'react';
import profileIcon from '../img/profile.svg';

const Header = () => (
  <header className="header">
    <nav>
      <ul>
        <li>Bookstore CMS</li>
        <li>BOOKS</li>
        <li>CATEGORIES</li>
      </ul>
    </nav>
    <div>
      <div className="profile-btn">
        <img src={profileIcon} className="profile-icon" alt="profile-icon" />
      </div>
    </div>
  </header>
);

export default Header;

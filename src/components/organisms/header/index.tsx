import React from 'react';
import { Link } from 'gatsby';

const Header: React.FC = () => (
  <header className="o-header">
    <div className="o-header__inner">
      <Link to="/" className="o-header__brand">
        Three for Flavin
      </Link>
      <nav className="o-header__primarymenu">
        <ul>
          <li>
            <Link to="/live">LIVE</Link>
          </li>
          <li>-</li>
          <li>
            <Link to="/discography">DISCOGRAPHY</Link>
          </li>
          <li>-</li>
          <li>
            <Link to="/movie">MOVIE</Link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
);

export default Header;

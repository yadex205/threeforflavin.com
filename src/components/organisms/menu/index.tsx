import React, { useState } from 'react';
import { Link } from 'gatsby';
import Hamburger from 'components/atoms/hamburger';
import fulllogoSrc from 'images/logo-full.svg';

const Menu: React.FC = () => {
  const [menuOpened, setMenuOpened] = useState(false);

  return (
    <div className={menuOpened ? 'o-menu o-menu--opened' : 'o-menu'}>
      <div className="o-menu__main">
        <div className="o-menu__navwrapper">
          <div className="o-menu__logosection">
            <img alt="Three for Flavin" src={fulllogoSrc} />
          </div>
          <nav className="o-menu__navsection">
            <ul className="o-menu__primarynav">
              <li>
                <Link to="/live">LIVE</Link>
              </li>
              <li>
                <Link to="/movie">MOVIE</Link>
              </li>
              <li>
                <Link to="/discography">DISCOGRAPHY</Link>
              </li>
              <li>
                <Link to="/biography">BIOGRAPHY</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="o-menu__hamburger">
        <div className="o-menu__hamburgeradjuster">
          <Hamburger onClick={() => setMenuOpened(!menuOpened)} />
        </div>
      </div>
    </div>
  );
};

export default Menu;

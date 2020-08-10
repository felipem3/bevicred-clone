import React from 'react';
import { FiMenu as MenuIcon } from 'react-icons/fi';

import './styles.css';

function Header() {
  return (
    <div id="header">
      <header>
        <div style={{ flex: 1 }} />
        <div className="logo-container">
          <a href="/">
            <img
              className="logo"
              alt="bevi"
              src="https://storage.googleapis.com/wordpress-parceiro-production.appspot.com/1/logo_bevi_branca_crop-4.png"
            />
          </a>
        </div>
        <div className="menu-button-container">
          <button>
            <MenuIcon />
          </button>
        </div>
      </header>
    </div>
  );
}

export default Header;

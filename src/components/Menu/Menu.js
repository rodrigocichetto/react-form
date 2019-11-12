import React from 'react';

import './Menu.css';
import MenuItem from './Item';

const Menu = () => (
  <nav className="navbar navbar-expand-lg menu row py-sm-4 px-sm-5">
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <i className="fas fa-bars" />
    </button>
    <div
      className="collapse navbar-collapse justify-content-end"
      id="navbarNav"
    >
      <ul className="nav nav-pills float-md-right flex-column flex-md-row">
        <MenuItem label="Como funciona" href="#" />
        <MenuItem label="Privacidade" href="#" />
        <MenuItem label="Ajuda" href="#" />
      </ul>
    </div>
  </nav>
);

export default Menu;

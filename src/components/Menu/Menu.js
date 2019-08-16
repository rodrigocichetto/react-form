import React from 'react';

import './Menu.css';
import MenuItem from './Item';

const Menu = () => (
    <nav className="navbar menu row p-sm-4 justify-content-end">
        <ul className="nav nav-pills float-right">
            <MenuItem label="Como funciona" href="#irineu" />
            <MenuItem label="Privacidade" href="#irineu" />
            <MenuItem label="Ajuda" href="#irineu" />
        </ul>
    </nav>
);

export default Menu;
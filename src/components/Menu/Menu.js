import React from 'react';

import './Menu.css';
import MenuItem from './Item';

const Menu = () => (
    <nav className="navbar menu row py-sm-4 px-sm-5 justify-content-end">
        <ul className="nav nav-pills float-right">
            <MenuItem label="Como funciona" href="#" />
            <MenuItem label="Privacidade" href="#" />
            <MenuItem label="Ajuda" href="#" />
        </ul>
    </nav>
);

export default Menu;
import React from 'react';

const MenuItem = (props) => (
  <li className="nav-item">
    <a className="nav-link text-white text-uppercase mx-2"
      href={props.href}>{props.label}</a>
  </li>
);

export default MenuItem;

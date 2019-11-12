import React from 'react';

const MenuItem = props => (
  <li className="nav-item min-w-100 min-w-md-auto">
    <a className="nav-link text-white text-uppercase mx-2" href={props.href}>
      {props.label}
    </a>
  </li>
);

export default MenuItem;

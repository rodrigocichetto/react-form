import React from 'react';
import { Link } from 'react-router-dom';
import { Spring } from 'react-spring/renderprops';

import './FloatButton.css';

const FloatButton = props => (
  <Spring
    from={{ opacity: 0, marginBottom: -100 }}
    to={{ opacity: 1, marginBottom: 0 }}
    config={{ delay: 600 }}
  >
    {spring => (
      <Link
        style={spring}
        className="float-button"
        to={`/${props.link ? props.link : ''}`}
      >
        <i className={`fas fa-${props.icon}`} />
      </Link>
    )}
  </Spring>
);

export default FloatButton;

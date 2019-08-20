import React from 'react';

import './Submit.css';

const Submit = (props) => {
  return (
    <>
      <button onClick={props.onClick}
        className={`${props.disabled() > 0 ? 'disabled': ''} submit btn px-5 py-2
          text-uppercase font-weight-bold`}>
        {props.label}
        {props.children}
      </button>
    </>
  );
};

export default Submit;

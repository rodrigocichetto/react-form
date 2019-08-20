import React from 'react';

import './CustomRadio.css';

const CustomRadio = (props) => {

  return (
    <>
      <label htmlFor={props.value}
        className={`custom-radio__label d-block ${props.activeItem === props.value ? 'active' : ''}
        ${props.hasError ? 'error': ''} text-uppercase w-100 p-2 text-center
        font-weight-bold text-uppercase`}>
        <span className="d-none d-md-block">{props.label}</span>
        <span className="d-block d-md-none"><i className={props.icon}></i></span>
      </label>
      <input type="radio" id={props.value} name={props.name} onChange={props.onChange}
        value={props.value} className="custom-radio__input d-none" />
    </>
  );
};

export default CustomRadio;

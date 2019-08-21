import React from 'react';

import './CustomRadio.css';

const CustomRadio = (props) => {

  return (
    <>
      <label htmlFor={props.value}
        className={`custom-radio__label d-block ${props.activeItem === props.value ? 'active' : ''} 
        text-uppercase w-100 p-2 text-center font-weight-bold text-uppercase`}>
        <span className="d-none d-md-block">{props.label}</span>
        <span className="d-block d-md-none"><i className={props.icon}></i></span>
      </label>
      <input type="radio" id={props.value} name={props.name}
        value={props.value} className="custom-radio__input d-none"
        ref={props.register({ required: props.required })} onChange={props.onChange} />
    </>
  );
};

export default CustomRadio;

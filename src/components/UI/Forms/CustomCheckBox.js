import React from 'react';

import './CustomCheckBox.css';

const CustomCheckBox = (props) => {
  return (
    <>
      <label htmlFor={props.value} className="custom-checkbox__label d-block
        text-uppercase w-100 p-2 text-center font-weight-bold text-uppercase">
        <span className="d-none d-md-block">{props.label}</span>
        <span className="d-block d-md-none"><i className={props.icon}></i></span>
      </label>
      <input type='checkbox' id={props.value} name={props.name} value={props.value}
        className="custom-checkbox__input d-none" />
    </>
  );
};

export default CustomCheckBox;

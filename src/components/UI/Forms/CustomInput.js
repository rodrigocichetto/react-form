import React, { useEffect } from 'react';
import $ from 'jquery';

import './CustomInput.css';

const CustomInput = props => {
  useEffect(() => {
    if (props.mask) {
      $(`#${props.name}`).mask(props.mask);
    }
  }, [props]);

  return (
    <>
      <label
        htmlFor={props.name}
        className="d-block text-uppercase font-weight-bold"
      >
        {props.label}
      </label>
      <input
        type={props.inputType || 'text'}
        id={props.name}
        name={props.name}
        className={`${props.hasError ? 'error' : ''} custom-input
        w-100 py-2 font-weight-bold text-uppercase bg-transparent`}
        onBlur={props.onBlur}
        inputMode={props.inputmode || 'text'}
        placeholder={props.placeholder}
        value={props.value}
        ref={props.register({ ...props.validations })}
      />
    </>
  );
};

export default CustomInput;

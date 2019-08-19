import React, { useEffect } from 'react';
import $ from 'jquery';

import './CustomInput.css';

const CustomInput = (props) => {

  useEffect(() => {
    if (props.mask) {
      $(`#${props.name}`).mask(props.mask);
    }
  }, [props]);

  return (
    <>
      <label htmlFor={props.name} className="d-block text-uppercase font-weight-bold">
        {props.label}
      </label>
      <input type={props.inputType || 'text'} id={props.name}
        name={props.name} className="custom-input w-100 py-2 font-weight-bold
        text-uppercase bg-transparent" />
    </>
  );

};

export default CustomInput;

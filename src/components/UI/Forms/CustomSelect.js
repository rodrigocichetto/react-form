import React from 'react';

import './CustomSelect.css';

const CustomSelect = props => {
  return (
    <>
      <label
        htmlFor={props.name}
        className="d-block text-uppercase font-weight-bold"
      >
        {props.label}
      </label>
      <select
        type={props.inputType || 'text'}
        id={props.name}
        name={props.name}
        className={`${props.hasError ? 'error' : ''} custom-select
        w-100 py-2 font-weight-bold text-uppercase bg-transparent`}
        ref={props.register({ required: props.required })}
      >
        {props.options.map(expedidor => (
          <option key={expedidor.value} value={expedidor.value}>
            {expedidor.label}
          </option>
        ))}
      </select>
    </>
  );
};

export default CustomSelect;

import React from 'react';
import { Spring } from 'react-spring/renderprops';

import './Item.css';

const renderSpanText = (style, text, value) => {
  if (text) {
    return (
      <span className={style}>
        {text}
        <span className="text-white font-weight-normal"> {value || ''}</span>
      </span>
    );
  }
};

const LoanHeaderItem = props => (
  <Spring
    from={{ opacity: 0, marginLeft: -100 }}
    to={{ opacity: 1, marginLeft: 0 }}
  >
    {spring => (
      <div
        style={spring}
        className={`${props.className ? props.className : 'col-6 col-md-2'}
      loan-checkout__item text-white font-weight-bold text-uppercase my-2 my-md-0`}
      >
        {renderSpanText('prefix', props.prefix)}
        {props.text}
        {renderSpanText('suffix', props.suffix, props.suffixValue)}
      </div>
    )}
  </Spring>
);

export default LoanHeaderItem;

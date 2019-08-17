import React from 'react';
import { Spring, animated } from 'react-spring/renderprops';

import './Item.css';

const renderSpanText = (style, text, value) => {
  if (text) {
    return (
      <span className={style}>
        {text}
        <span className="text-white font-weight-normal"> {value ? value : ''}</span>
      </span>
    );
  }
}

const LoanHeaderItem = (props) => (
  <Spring from={{ opacity: 0, marginLeft: -1000 }} to={{ opacity: 1, marginleft: 0 }}>
    <animated.div className={`${props.className ? props.className : 'col-6 col-md-2'}
        loan-checkout__item text-white font-weight-bold text-uppercase my-2 my-md-0`}>
      {renderSpanText('prefix', props.prefix)}
      {props.mainText}
      {renderSpanText('suffix', props.suffix, props.suffixValue)}
    </animated.div>
  </Spring>
);

export default LoanHeaderItem;

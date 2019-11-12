import React from 'react';
import { Spring } from 'react-spring/renderprops';

import './StepItem.css';

const LoanHeaderStepItem = props => (
  <Spring
    from={{ opacity: 0, marginLeft: -50 }}
    to={{ opacity: props.stepActive === props.number ? 1 : 0.5, marginLeft: 0 }}
    config={{ delay: 300 }}
  >
    {spring => (
      <div
        style={spring}
        className={`
        ${props.stepActive === props.number ? 'active' : 'd-none d-md-flex'}
        ${props.stepActive > props.number ? 'visited' : ''}
        col-12 col-md-3 loan-checkout__step font-weight-bold text-uppercase my-2 my-md-0`}
      >
        <span className="loan-checkout__step-number">{props.number}</span>
        {props.text}
      </div>
    )}
  </Spring>
);

export default LoanHeaderStepItem;

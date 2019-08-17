import React, { useState } from 'react';

import LoanHeaderStepItem from './StepItem';
import './Steps.css';

const LoanHeaderSteps = () => {
  const [stepActive] = useState(2);

  return(
    <section className="loan-checkout__steps row py-2 py-md-3 px-5 justify-content-center">
      <div className="col-12 col-md-8 p-0">
        <div className="row">
          <LoanHeaderStepItem number={1} text="Simule" stepActive={stepActive} />
          <LoanHeaderStepItem number={2} text="Preencha o cadastro" stepActive={stepActive} />
          <LoanHeaderStepItem number={3} text="Revise seu pedido" stepActive={stepActive} />
          <LoanHeaderStepItem number={4} text="Finalize seu pedido" stepActive={stepActive} />
        </div>
      </div>
    </section>
  );
};

export default LoanHeaderSteps;

import React from 'react';

import LoanHeaderItem from './Item';
import './Header.css';

const LoanHeader = () => (
  <section className="loan-checkout__header row py-4 px-5 justify-content-center">
    <div className="col-12 col-md-8 p-0">
      <div className="row">
        <LoanHeaderItem prefix="Me chamo:" text="Paul Irish" suffix="CPF:"
          suffixValue={"444.444.444-44"} className="col-6 col-md-4" />
        <LoanHeaderItem prefix="Preciso de:" text="R$ 2.000" />
        <LoanHeaderItem prefix="Quero pagar em" text="12 vezes" />
        <LoanHeaderItem prefix="Para:" text="Comprar uma bike"
          className="col-6 col-md-4" />
      </div>
    </div>
  </section>
);

export default LoanHeader;

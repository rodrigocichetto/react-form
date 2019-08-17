import React from 'react';

import LoanHeaderItem from './Item';
import './Header.css';

const LoanHeader = () => (
  <section className="loan-checkout__header row py-sm-4 px-sm-5 justify-content-center">
    <div className="col-12 col-md-8">
      <div className="row p-4 p-md-0">
        <LoanHeaderItem prefix="Me chamo:" mainText="Paul Irish" suffix="CPF:"
          suffixValue={"444.444.444-44"} className="col-6 col-md-4" />
        <LoanHeaderItem prefix="Preciso de:" mainText="R$ 2.000" />
        <LoanHeaderItem prefix="Quero pagar em" mainText="12 vezes" />
        <LoanHeaderItem prefix="Para:" mainText="Comprar uma bike"
          className="col-6 col-md-4" />
      </div>
    </div>
  </section>
);

export default LoanHeader;

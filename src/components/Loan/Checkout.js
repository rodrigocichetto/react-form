import React from 'react';

import './Checkout.css';
import LoanHeader from './Header/Header';
import LoanHeaderSteps from './Header/Steps';
import LoanPersonalData from './PersonalData';

const LoanCheckout = () => (
  <main>
    <LoanHeader />
    <LoanHeaderSteps />
    <LoanPersonalData />
  </main>
);

export default LoanCheckout;

import React from 'react';
import PurchaseHeaderItem from './Item';

import './Header.css';

const PurchaseHeader = () => (
    <section className="purchase-checkout__header row py-sm-4 px-sm-5 justify-content-center">
        <PurchaseHeaderItem prefix="Me chamo:" mainText="Paul Irish" suffix="CPF:" suffixValue={"444.444.444-44"} />
        <PurchaseHeaderItem prefix="Preciso de:" mainText="R$ 2.000" />
    </section>
);

export default PurchaseHeader;

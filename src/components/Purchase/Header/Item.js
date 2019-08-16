import React from 'react';

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

const PurchaseHeaderItem = (props) => (
    <div className="purchase-checkout__item col-sm-2 text-white font-weight-bold text-uppercase">
        {renderSpanText('prefix', props.prefix)}
        {props.mainText}
        {renderSpanText('suffix', props.suffix, props.suffixValue)}
    </div>
);

export default PurchaseHeaderItem;
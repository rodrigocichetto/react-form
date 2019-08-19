import React from 'react';
import { Spring } from 'react-spring/renderprops';
import CustomInput from '../UI/Forms/CustomInput';

import './PersonalData.css';

const LoanPersonalData = () => (
  <Spring from={{ opacity: 0 }}
    to={{ opacity: 1 }}
    config={{ delay: 500 }}>
    {spring =>
      <section style={spring} className="personal-data row justify-content-start
        justify-content-md-center p-4 p-md-5 mx-1 mx-md-5">
        <h1 className="text-uppercase font-weight-bold my-1 my-md-5">
          Dados pessoais
        </h1>

        <div className="col-12 col-md-10 offset-0 offset-md-1">
          <div className="row">
            <div className="personal-data__input p-0 px-md-2 my-3 m-md-0 col-12 col-md-4">
              <CustomInput name="rg" label="Número de RG" mask="99.999.999-9" />
            </div>
            <div className="personal-data__input p-0 px-md-2 my-3 m-md-0 col-12 col-md-4">
              <CustomInput name="emissao" label="Emissão" mask="99/99/9999" />
            </div>
            <div className="personal-data__input p-0 px-md-2 my-3 m-md-0 col-12 col-md-4">
              <CustomInput name="expedidor" label="Órgão expedidor" />
            </div>
          </div>
          <div className="row">

          </div>
        </div>
      </section>
    }
  </Spring>
);

export default LoanPersonalData;

import React from 'react';
import { Spring } from 'react-spring/renderprops';
import CustomInput from '../UI/Forms/CustomInput';

import './PersonalData.css';
import CustomCheckBox from '../UI/Forms/CustomCheckBox';
import Submit from '../UI/Forms/Submit';

const LoanPersonalData = () => (
  <Spring from={{ opacity: 0 }}
    to={{ opacity: 1 }}
    config={{ delay: 500 }}>
    {spring =>
      <section style={spring} className="personal-data row justify-content-start
        justify-content-md-center p-4 p-md-5 mx-1 mx-md-5">
        <div className="p-0 px-md-3 col-12 col-md-10">
          <h1 className="text-uppercase font-weight-bold text-center my-1 my-md-5">
            Dados pessoais
          </h1>
          <div className="row m-0 mb-md-5">
            <div className="personal-data__input p-0 px-md-2 my-3 m-md-0 col-12 col-md-4">
              <CustomInput name="rg" label="Número de RG" mask="99.999.999-9"
                placeholder="12.345.678-9" inputmode="numeric" />
            </div>
            <div className="personal-data__input p-0 px-md-2 my-3 m-md-0 col-12 col-md-4">
              <CustomInput name="emissao" label="Emissão" mask="99/99/9999"
                placeholder="12/12/2012" inputmode="numeric" />
            </div>
            <div className="personal-data__input p-0 px-md-2 my-3 m-md-0 col-12 col-md-4">
              <CustomInput name="expedidor" label="Órgão expedidor"
                placeholder="SSP" />
            </div>
          </div>
          <div className="row m-0 mb-md-5">
            <div className="p-0 px-md-2 col-2 offset-0 offset-md-1 d-flex align-items-center
              justify-content-end text-uppercase font-weight-bold">
              sexo
            </div>
            <div className="personal-data__checkbox px-2 my-3 m-md-0 col-5 col-md-3">
              <CustomCheckBox name="sexo" value="masculino" label="Masculino" icon="fas fa-mars" />
            </div>
            <div className="personal-data__checkbox px-2 my-3 m-md-0 col-5 col-md-3">
              <CustomCheckBox name="sexo" value="feminino" label="Feminino" icon="fas fa-venus" />
            </div>
          </div>
          <div className="row m-0 mb-md-5 justify-content-center">
            <Submit label="Continuar">
              <i className="fas fa-caret-right ml-3"></i>
            </Submit>
          </div>
        </div>
      </section>
    }
  </Spring>
);

export default LoanPersonalData;

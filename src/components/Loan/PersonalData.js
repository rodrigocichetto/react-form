import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Spring } from 'react-spring/renderprops';
import validator from 'validator';

import { getExpedidores } from '../../store/expedidores/actions';
import { saveLoan } from '../../store/loan/actions';
import CustomInput from '../UI/Forms/CustomInput';
import CustomSelect from '../UI/Forms/CustomSelect';

import './PersonalData.css';
import CustomRadio from '../UI/Forms/CustomRadio';
import Submit from '../UI/Forms/Submit';

const LoanPersonalData = () => {
  const initialPersonalData = {
    rg: '',
    emissao: '',
    expedidor: '',
    sexo: ''
  };

  const [personalData, setPersonalData] = useState(initialPersonalData);
  const [errors, setError] = useState({});
  const [hasSubmited, setSubmited] = useState(false);

  const expedidores = useSelector(state => state.expedidores.expedidores);
  const message = useSelector(state => state.loan.message);

  const dispatch = useDispatch();

  useEffect(() => {
    getExpedidores(dispatch);
  }, [dispatch]);

  const handleChange = (event) => {
    console.log(event);
    // debugger;
    setPersonalData({ ...personalData, [event.currentTarget.name]: event.currentTarget.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmited(true);
    if (validate()) {
      saveLoan(personalData, dispatch);
      setPersonalData({initialPersonalData});
    }
  };

  const hasErrors = () => Object.keys(errors).length > 0;

  const validate = () => {
    if (hasSubmited) {
      let e = {};
      if (validator.isEmpty(personalData.rg) ||
        !validator.isLength(personalData.rg, {min: 9, max: 12})) {
        e.rg = true;
      }
      if (validator.isEmpty(personalData.emissao) ||
        !validator.isLength(personalData.emissao, {min: 10, max: 10})) {
        e.emissao = true;
      }
      if (validator.isEmpty(personalData.expedidor)) {
        e.expedidor = true;
      }
      if (validator.isEmpty(personalData.sexo)) {
        e.sexo = true;
      }
      setError(e);
      return Object.keys(e).length === 0;
    }
  };

  const renderMessage = () => {
    if (message.length > 0) {
      return (
        <div className="alert alert-success alert-dismissible fade show
          font-weight-bold text-uppercase" role="alert">
          {message}
          <button type="button" className="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
      )
    }
  }

  return (
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
            {renderMessage()}
            <form name="personal-data" onSubmit={handleSubmit}>
              <div className="row m-0 mb-md-5">
                <div className="personal-data__input p-0 px-md-2 my-3 m-md-0 col-12 col-md-4">
                  <CustomInput onChange={handleChange} name="rg" onBlur={validate}
                    label="Número de RG" placeholder="12.345.678-9"
                    hasError={errors.rg} inputmode="numeric" value={personalData.rg} />
                </div>
                <div className="personal-data__input p-0 px-md-2 my-3 m-md-0 col-12 col-md-4">
                  <CustomInput onChange={handleChange} name="emissao" onBlur={validate}
                    label="Emissão" mask="99/99/9999" placeholder="12/12/2012"
                    hasError={errors.emissao} inputmode="numeric" value={personalData.emissao} />
                </div>
                <div className="personal-data__input p-0 px-md-2 my-3 m-md-0 col-12 col-md-4">
                  <CustomSelect onChange={handleChange} options={expedidores} onBlur={validate}
                    name="expedidor" label="Órgão expedidor" hasError={errors.expedidor}
                    value={personalData.expedidor} />
                </div>
              </div>
              <div className="row m-0 mb-md-5">
                <div className={`p-0 px-md-2 col-2 offset-0 offset-md-1 d-flex align-items-center
                  justify-content-end text-uppercase font-weight-bold ${errors.sexo ? 'label-error': ''}`}>
                  sexo
                </div>
                <div className="personal-data__checkbox px-2 my-3 m-md-0 col-5 col-md-3">
                  <CustomRadio activeItem={personalData.sexo} onChange={handleChange} name="sexo"
                    value="M" label="Masculino" icon="fas fa-mars" validate={validate} />
                </div>
                <div className="personal-data__checkbox px-2 my-3 m-md-0 col-5 col-md-3">
                  <CustomRadio activeItem={personalData.sexo} onChange={handleChange} name="sexo"
                    value="F" label="Feminino" icon="fas fa-venus" validate={validate} />
                </div>
              </div>
              <div className="row m-0 mb-md-5 justify-content-center">
                <Submit disabled={hasErrors} label="Continuar" onClick={() => setSubmited(true)} type="submit">
                  <i className="fas fa-caret-right ml-3"></i>
                </Submit>
              </div>
            </form>
          </div>
        </section>
      }
    </Spring>
  );
};

export default LoanPersonalData;

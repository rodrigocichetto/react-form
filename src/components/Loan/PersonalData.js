import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import useForm from 'react-hook-form';
import { Spring } from 'react-spring/renderprops';

import { getExpedidores } from '../../store/expedidores/actions';
import { saveLoan, clearMessage } from '../../store/loan/actions';
import CustomInput from '../UI/Forms/CustomInput';
import CustomSelect from '../UI/Forms/CustomSelect';

import './PersonalData.css';
import CustomRadio from '../UI/Forms/CustomRadio';
import Submit from '../UI/Forms/Submit';

const LoanPersonalData = () => {
  const { handleSubmit, register, errors } = useForm({
    submitFocusError: true,
  });
  const [sexo, setSexo] = useState('');

  const expedidores = useSelector(state => state.expedidores.expedidores);
  const message = useSelector(state => state.loan.message);

  const dispatch = useDispatch();

  useEffect(() => {
    getExpedidores(dispatch);
  }, [dispatch]);

  const handleSexoChange = event => {
    setSexo(event.currentTarget.value);
  };

  const onSubmit = (values, e) => {
    saveLoan(values, dispatch);
    setSexo('');
    e.target.reset();
  };

  const renderMessage = () => {
    if (message && message.length > 0) {
      return (
        <div
          className="alert alert-success alert-dismissible fade show
          font-weight-bold text-uppercase"
          role="alert"
        >
          {message}
          <button
            onClick={() => clearMessage(dispatch)}
            type="button"
            className="close"
            data-dismiss="alert"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
      );
    }
    return <></>;
  };

  return (
    <Spring from={{ opacity: 0 }} to={{ opacity: 1 }} config={{ delay: 500 }}>
      {spring => (
        <section
          style={spring}
          className="personal-data row justify-content-start
          justify-content-md-center p-4 p-md-5 mx-1 mx-md-5"
        >
          <div className="p-0 px-md-3 col-12 col-md-10">
            <h1 className="text-uppercase font-weight-bold text-center my-1 my-md-5">
              Dados pessoais
            </h1>
            {renderMessage()}
            <form name="personal-data" onSubmit={handleSubmit(onSubmit)}>
              <div className="row m-0 mb-md-5">
                <div className="personal-data__input p-0 px-md-2 my-3 m-md-0 col-12 col-md-4">
                  <CustomInput
                    name="rg"
                    label="Número de RG"
                    placeholder="12.345.678-9"
                    mask="99.999.999-9"
                    hasError={errors.rg}
                    inputmode="numeric"
                    register={register}
                    validations={{ required: true, minLength: 12 }}
                  />
                </div>
                <div className="personal-data__input p-0 px-md-2 my-3 m-md-0 col-12 col-md-4">
                  <CustomInput
                    name="emissao"
                    label="Emissão"
                    mask="99/99/9999"
                    placeholder="12/12/2012"
                    hasError={errors.emissao}
                    inputmode="numeric"
                    register={register}
                    validations={{
                      required: true,
                      pattern: /^(0?[1-9]|[12][0-9]|3[01])[/-](0?[1-9]|1[012])[/-]\d{4}$/,
                    }}
                  />
                </div>
                <div className="personal-data__input p-0 px-md-2 my-3 m-md-0 col-12 col-md-4">
                  <CustomSelect
                    options={expedidores}
                    name="expedidor"
                    label="Órgão expedidor"
                    hasError={errors.expedidor}
                    register={register}
                    required
                  />
                </div>
              </div>
              <div className="row m-0 mb-md-5">
                <div
                  className={`p-0 px-md-2 col-2 offset-0 offset-md-1 d-flex align-items-center
                  justify-content-end text-uppercase font-weight-bold ${
                    errors.sexo ? 'label-error' : ''
                  }`}
                >
                  sexo
                </div>
                <div className="personal-data__checkbox px-2 my-3 m-md-0 col-5 col-md-3">
                  <CustomRadio
                    activeItem={sexo}
                    name="sexo"
                    value="M"
                    label="Masculino"
                    icon="fas fa-mars"
                    onChange={handleSexoChange}
                    register={register}
                    required
                  />
                </div>
                <div className="personal-data__checkbox px-2 my-3 m-md-0 col-5 col-md-3">
                  <CustomRadio
                    activeItem={sexo}
                    name="sexo"
                    value="F"
                    label="Feminino"
                    icon="fas fa-venus"
                    onChange={handleSexoChange}
                    register={register}
                    required
                  />
                </div>
              </div>
              <div className="row m-0 mb-md-5 justify-content-center">
                <Submit disabled={errors} label="Continuar">
                  <i className="fas fa-caret-right ml-3" />
                </Submit>
              </div>
            </form>
          </div>
        </section>
      )}
    </Spring>
  );
};

export default LoanPersonalData;

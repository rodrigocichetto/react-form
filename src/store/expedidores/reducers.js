import * as t from './types';

const INITIAL_STATE = {
  expedidores: [],
  errorMessage: '',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case t.GET_EXPEDIDORES:
      return {
        ...state,
        expedidores: action.data.orgao_emissor,
      };
    case t.GET_EXPEDIDORES_FAIL:
      return {
        ...state,
        expedidores: [],
        errorMessage: action.errorMessage,
      };
    default:
      return state;
  }
};

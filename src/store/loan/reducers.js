import * as t from './types';

const INITIAL_STATE = {
  loans: [],
  message: '',
  error: {}
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case t.LIST_LOAN:
      return {
        ...state,
        loans: action.data,
      };
    case t.CREATE_LOAN:
      return {
        ...state,
        message: action.data.message,
      };
    case t.DELETE_LOAN:
      let loansFiltered = state.loans.filter(i => i.id !== action.data.id);
      return {
        ...state,
        loans: loansFiltered,
        message: action.data.message,
      };
    case t.CLEAN_MESSAGES_LOAN:
      return {
        ...state,
        message: '',
        error: {}
      };
    case t.FAIL_LOAN:
      return {
        ...state,
        loans: [],
        error: action.error,
      };
    default:
      return state;
  }
};

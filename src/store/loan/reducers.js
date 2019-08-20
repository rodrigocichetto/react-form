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
        loans: action.data.loans,
      };
    case t.CREATE_LOAN:
    case t.DELETE_LOAN:
      return {
        ...state,
        message: action.data.message,
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

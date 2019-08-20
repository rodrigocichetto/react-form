

import * as t from './types';
import axios from 'axios';
import CONFIG from '../../utils/config';

export const getLoans = (dispatch) => {
  axios.get(`${CONFIG.API_URL}loan`)
    .then(response => dispatch(success(t.LIST_LOAN, response.data)))
    .catch(error => dispatch(failed(error)));
};

export const saveLoan = (loan, dispatch) => {
  axios.post(`${CONFIG.API_URL}loan`, loan)
    .then(response => dispatch(success(t.CREATE_LOAN, response.data)))
    .catch(error => dispatch(failed(error)));
};

export const deleteLoan = (loan, dispatch) => {
  axios.delete(`${CONFIG.API_URL}loan/${loan.id}`)
    .then(response => dispatch(success(t.DELETE_LOAN, response.data)))
    .catch(error => dispatch(failed(error)));
};

function success(type, data) {
  return {
    type,
    data
  };
}

function failed(error) {
  return {
    type: t.FAIL_LOAN,
    error
  };
}

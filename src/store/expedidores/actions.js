import axios from 'axios';
import * as t from './types';
import CONFIG from '../../utils/config';

export const getExpedidores = dispatch => {
  axios
    .get(`${CONFIG.API_URL}orgaos-expedidores`)
    .then(response => dispatch(success(response.data)))
    .catch(error => dispatch(failed(error)));
};

function success(data) {
  return {
    type: t.GET_EXPEDIDORES,
    data,
  };
}

function failed(error) {
  return {
    type: t.GET_EXPEDIDORES_FAIL,
    error,
  };
}

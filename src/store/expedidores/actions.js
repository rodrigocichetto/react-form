

import * as t from './types';
import axios from 'axios';

const getExpedidores = (dispatch) => {
  axios.get('http://5d55ea53d3db4b0014a037b1.mockapi.io/orgaos-expedidores')
    .then(response => dispatch(success(response.data)))
    .catch(error => dispatch(failed(error)));
};

function success(data) {
  return {
    type: t.GET_EXPEDIDORES,
    data
  };
}

function failed(error) {
  return {
    type: t.GET_EXPEDIDORES_FAIL,
    error
  };
}

export default getExpedidores;

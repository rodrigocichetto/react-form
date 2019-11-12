import { createStore, combineReducers } from 'redux';
import expedidores from './expedidores/reducers';
import loan from './loan/reducers';

const store = createStore(combineReducers({ loan, expedidores }));

export default store;

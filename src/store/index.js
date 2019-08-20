import { createStore } from 'redux';
import expedidores from './expedidores/reducers';

const store = createStore(expedidores);

export default store;

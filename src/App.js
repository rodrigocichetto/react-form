import React from 'react';
import { Provider } from 'react-redux';
import Menu from './components/Menu/Menu';
import LoanCheckout from './components/Loan/Checkout';

import store from './store';

const App = () => {
  return (
    <Provider store={store}>
      <Menu />
      <LoanCheckout />
    </Provider>
  );
}

export default App;

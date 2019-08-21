import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Menu from './components/Menu/Menu';
import LoanCheckout from './components/Loan/Checkout';
import LoanList from './components/Loan/List';
import store from './store';
import FloatButton from './components/UI/FloatButton';

const App = () => {
  return (
    <Provider store={store}>
      <Menu />
      <Router>
        <Route exact path="/" render={() => <>
          <FloatButton link="list" icon="table" /><LoanCheckout />
        </>} />
        <Route exact path="/list" render={() => <>
          <FloatButton icon="plus" /><LoanList />
        </>} />
      </Router>
    </Provider>
  );
}

export default App;

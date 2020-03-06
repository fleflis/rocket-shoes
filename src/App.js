import React from 'react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import './config/ReactotronConfig';
import GlobalStyles from './global/styles';
import Routes from './routes';
import Header from './components/Header';
import store from './store';
import history from './services/history';

const App = () => {
  return (
    <Provider store={store}>
      <Router history={history}>
        <GlobalStyles />
        <Header />
        <Routes />
        <ToastContainer autoClose={3000} />
      </Router>
    </Provider>
  );
};

export default App;

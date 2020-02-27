import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyles from './global/styles';
import Routes from './routes';
import Header from './components/Header';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <GlobalStyles />
        <Header />
        <Routes />
      </BrowserRouter>
    </>
  );
};

export default App;

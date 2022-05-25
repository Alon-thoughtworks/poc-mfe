import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import {
  StylesProvider,
  createGenerateClassName,
} from '@material-ui/core/styles';

import MarketingApp from './components/MarketingApp';
import Header from './components/Header';

import Booking from './components/Booking';
import CustomerApp from './components/CustomerApp';


const generateClassName = createGenerateClassName({
  productionPrefix: 'co',
});

export default () => {
  return (
    <BrowserRouter>
      <StylesProvider generateClassName={generateClassName}>
        <div>
          <Header />
          <Booking />
          <MarketingApp />
          <CustomerApp />
        </div>
      </StylesProvider>
    </BrowserRouter>
  );
};

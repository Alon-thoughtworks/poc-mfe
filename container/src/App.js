import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";

import {
  StylesProvider,
  createGenerateClassName,
} from '@material-ui/core/styles';

import MarketingApp from './components/MarketingApp';
import Header from './components/Header';

import Booking from './components/Booking';
import CustomerApp from './components/CustomerApp';
import Signin from './components/Signin';

const generateClassName = createGenerateClassName({
  productionPrefix: 'co',
});

export default () => {
  return (
    <BrowserRouter>
      <StylesProvider generateClassName={generateClassName}>
        <Switch>
            <Route exact path="/signin">
                <Signin />
            </Route>
            {/* <Route path="/booking">
              <Booking />
            </Route>
            <Route path="/marketing">
              <MarketingApp />
            </Route> */}
            <Route path="/">
              <div>
                <Header />
                <h1>Welcome!</h1>
              </div>
              {/* <Homepage></Homepage> */}
            </Route>
        </Switch>
      </StylesProvider>
    </BrowserRouter>
  );
};

import React from 'react';
import {
    BrowserRouter,
    Switch,
    Route,
    Link
} from "react-router-dom";

import MarketingApp from './components/MarketingApp';
import Header from './components/Header';

import Booking from './components/Booking';
import CustomerApp from './components/CustomerApp';
import Signin from './components/Signin';
import {lufthansaTheme, swissTheme} from "./theme";
import {ThemeProvider} from "styled-components";

export default () => {
    return (
        <BrowserRouter>
            <ThemeProvider theme={swissTheme}>
                <Switch>
                    <Route exact path="/signin">
                        <Signin/>
                    </Route>
                    {/* <Route path="/booking">
              <Booking />
            </Route>
            <Route path="/marketing">
              <MarketingApp />
            </Route> */}
                    <Route path="/">
                        <div className="home_wrapper">
                            <Header/>
                            <h1>Welcome!</h1>
                        </div>
                    </Route>
                </Switch>
            </ThemeProvider>

        </BrowserRouter>
    );
};

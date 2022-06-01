import React, { useState } from 'react';
import {
    BrowserRouter,
    Switch,
    Route
} from "react-router-dom";

// import MarketingApp from './components/MarketingApp';
// import Booking from './components/Booking';
// import CustomerApp from './components/CustomerApp';
import Header from './components/Header';
import LoyaltyModule from './components/Loyalty';
import Signin from './components/Signin';
import { lufthansaTheme, swissTheme } from "./theme";
import { ThemeProvider } from "styled-components";


function getUserProfile() {
    return JSON.parse(localStorage.getItem('Lufthansa-user')) || false;
}

function removeUserProfile() {
    return localStorage.removeItem('Lufthansa-user');
}

export default () => {
    const [isLogin, setIsLogin] = useState(getUserProfile());

    const onSignOut = () => {
        removeUserProfile();
        setIsLogin(false)
    };

    return (
        <BrowserRouter>
            <ThemeProvider theme={lufthansaTheme}>
                <Switch>
                    <Route exact path="/signin">
                        <Signin/>
                    </Route>
                    <Route path="/">
                        <div className="home_wrapper">
                            <Header {...{isLogin, onSignOut}}/>
                            {/* <Route path="/booking">
                                <Booking />
                            </Route> */}
                             {/* <Route path="/marketing">
                                <MarketingApp />
                            </Route>  */}
                            <Route path="/loyalty">
                                <LoyaltyModule {...{isLogin}}/>
                            </Route>
                            
                        </div>
                    </Route>
                </Switch>
            </ThemeProvider>
        </BrowserRouter>
    );
};

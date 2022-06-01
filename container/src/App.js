import React, { useState, useEffect } from 'react';
import {
    BrowserRouter,
    Switch,
    Route
} from "react-router-dom";

// import MarketingApp from './components/MarketingApp';
import Booking from './components/Booking';
// import CustomerApp from './components/CustomerApp';
import Header from './components/Header/Header';
import LoyaltyModule from './components/Loyalty';
import Signin from './components/Header/Signin';


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
                <Switch>
                    <Route exact path="/signin">
                        <Signin/>
                    </Route>
                    <Route path="/">
                        <div className="home_wrapper">
                            <Header {...{isLogin, onSignOut}}/>
                            <Route path="/booking">
                                <Booking />
                            </Route>
                             {/* <Route path="/marketing">
                                <MarketingApp />
                            </Route>  */}
                            <Route path="/loyalty">
                                <LoyaltyModule {...{isLogin}}/>
                            </Route>
                            
                        </div>
                    </Route>
                </Switch>
        </BrowserRouter>
    );
};

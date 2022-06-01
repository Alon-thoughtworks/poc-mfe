import React from 'react';
import {useHistory} from 'react-router-dom';
import { Link } from "react-router-dom";
import './header.css'

export default function Header({isLogin, onSignOut}) {
    let history = useHistory();

    const onSignIn = () => {
        history.push("/signin");
    };

    return (
        <div className='topHeader'>
            <nav>
                <ul className='profileList'>
                    <li><Link to="/booking">Booking</Link></li>
                    <li><Link to="/loyalty">loyalty</Link></li>
                    <li className='loginButton'>
                        {isLogin ? <button className='Button'> {isLogin['first_name']}</button> : null}
                        {isLogin ?
                        <button className='navButton' onClick={onSignOut}>Logout</button> :
                        <button className='navButton' onClick={onSignIn}>Login</button>}
                    </li>
                </ul>
            </nav>
        </div>

    )
}
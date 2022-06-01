import React, {useState} from "react";
import Input from '@material-ui/core/Input';
import users from '../../users.json'
import {useHistory} from "react-router-dom";

import './signin.css'


const Signin = () => {
    const [userError, setUserError] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const history = useHistory();

    const onLogIn = (e) => {
        e.preventDefault()
        try {
            let user = users[email]
            console.log(password, user)
            if (password === user.password) {
                setUserError('')
                localStorage.setItem('Lufthansa-user', JSON.stringify(user));
                history.push('/')
            } else {
                setUserError('password is incorrect')
            }

        } catch {
            setUserError('users is unknown')
        }
    }

    return (
        <div className="warpper">
            <h1>Sign In</h1>
            <form onSubmit={onLogIn}>
                <div>
                    <label className="signinLabel" >email: </label>
                    <input className="signinInput" type='email' placeholder="email" onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div>
                    <label className="signinLabel" >passsword: </label>
                    <input className="signinInput" type='password' placeholder="password"
                                 onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <div>
                    <input className="submitButton" type='submit' value='Signin'/>
                    {/* <SubmitButton type="submit" value="Signin"/> */}
                </div>
                {userError ? <p>{userError}</p> : ''}
            </form>
        </div>
    );
};

export default Signin;
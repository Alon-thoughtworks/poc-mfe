import React, {useState} from "react";
import styled, {ThemeProvider} from "styled-components";
import Input from '@material-ui/core/Input';
import users from '../users.json'
import {useHistory} from "react-router-dom";

const Wrapper = styled.div`
  margin: 0 auto;
  width: 320px;
`;

const SubmitButton = styled.input`
  font-size: 1em;
  margin: 1em;
  padding: 0.5em 1.5em;
  border-radius: 3px;

  /* Color the border and text with theme.main */
  background-color: ${props => props.theme.mainColor};
  color: ${props => props.theme.mainTextColor};
  border: 2px solid ${props => props.theme.mainColor};
`;

const SigninLabel = styled.label`
  display: block;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1;
  color: #999;
  margin: 2em 0;
`;

const SigninInput = styled.input`
  font-size: 1em;
  padding: 0.5em 1.5em;
  display: block;
  width: 100%;

  /* Color the border and text with theme.main */
  background-color: #fff;
  color: ${props => props.theme.mainColor};
  border-width: 0 0 2px 0;
  border-style: solid;
  border-color: ${props => props.theme.mainColor};
  &:focus-visible {
    border: none medium;
  }
`;

// We are passing a default theme for Buttons that arent wrapped in the ThemeProvider
SubmitButton.defaultProps = {
    theme: {
        mainColor: "#333",
        mainTextColor: "#FFF"
    }
}

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
        <Wrapper>
            <h1>Sign In</h1>
            <form onSubmit={onLogIn}>
                <div>
                    <SigninLabel>email: </SigninLabel>
                    <SigninInput type='email' placeholder="email" onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div>
                    <SigninLabel>passsword: </SigninLabel>
                    <SigninInput type='password' placeholder="password"
                                 onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <div>
                    {/*<input type='submit' value='Signin'/>*/}
                    {/*<Input type='submit' value='Signin'/>*/}
                    <SubmitButton type="submit" value="Signin"/>
                </div>
                {userError ? <p>{userError}</p> : ''}
            </form>
        </Wrapper>
    );
};

export default Signin;
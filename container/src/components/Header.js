import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import styled from "styled-components";

function getUserProfile() {
    return JSON.parse(localStorage.getItem('Lufthansa-user')) || false;
}

function removeUserProfile() {
    return localStorage.removeItem('Lufthansa-user');
}

const TopHeader = styled.div`
  padding: 1em 2em;
  background-color: ${props => props.theme.mainColor};
  color: ${props => props.theme.mainTextColor};
`;

const ProfileList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
  background-color: ${props => props.theme.mainColor};
  color: ${props => props.theme.mainTextColor};
`;

const Button = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.5em 1.5em;
  border-radius: 3px;

  /* Color the border and text with theme.main */
  background-color: ${props => props.theme.mainColor};
  color: ${props => props.theme.mainTextColor};
  border: 2px solid ${props => props.theme.mainColor};
`;

const NavButton = styled(Button)`
  background-color: ${props => props.theme.secondColor};
  color: #fff;
`;

const LastColumn = styled.li`
  flex: 1;
  & > button {
    float: right;
  }
`;

export default function Header() {
    let history = useHistory();

    const [isLogin, setIsLogin] = useState(getUserProfile());

    const onSignOut = () => {
        removeUserProfile();
        setIsLogin(false)
    };
    const onSignIn = () => {
        history.push("/signin");
    };

    return (
        <TopHeader>
            <nav>
                <ProfileList>
                    <li><h3>Lufthansa</h3></li>
                    <LastColumn>
                        {isLogin ? <Button> {isLogin['first_name']}</Button> : null}
                        {isLogin ?
                        <NavButton onClick={onSignOut}>Logout</NavButton> :
                        <NavButton onClick={onSignIn}>Login</NavButton>}
                    </LastColumn>
                </ProfileList>
            </nav>
        </TopHeader>

    )
}
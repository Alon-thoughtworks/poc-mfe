import React, {useState} from "react";
import users from '../users.json'
import { useHistory } from "react-router-dom";

const Signin = () => {
    const [userError, setUserError] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const history = useHistory();

    const onLogIn = (e) => {
        e.preventDefault()
        try{
            let user = users[email]
            console.log(password, user)
            if (password === user.password){
                setUserError('')
                localStorage.setItem('Lufthansa-user', JSON.stringify(user));
                history.push('/')
            }else{
                setUserError('password is incorrect')
            }

        }catch{
            setUserError('users is unknown')
        }
    }

    return ( <div>
        <form onSubmit={onLogIn}>
            <ul>
                
                <li>
                    <label>email: </label>
                    <input type='email' placeholder="email" onChange={(e) => setEmail(e.target.value)}/>
                </li>
                <li>
                    <label>passsword: </label>
                    <input type='password' placeholder="password" onChange={(e) => setPassword(e.target.value)} />
                </li>
                <li>
                    <input type='submit' value='Signin'/>
                </li>
                {userError? <p>{userError}</p>: ''}
            </ul>
           
           
        </form>
    </div> );
}
 
export default Signin;
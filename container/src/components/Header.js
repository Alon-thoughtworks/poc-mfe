import React, {useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom';
export default function Header() {
  let history = useHistory();

  const [isLogin, setIsLogin] = useState(JSON.parse(localStorage.getItem('Lufthansa-user')) || false)

  // useEffect = () =>{
  //   const user = JSON.parse(localStorage.getItem('Lufthansa-user')) || false
  //   setIsLogin(user)
  // }

  return (
    <header>
      <nav>
        <ul>
          <li>Lufthansa</li>
          
          {isLogin ? <li><button> {isLogin['first_name']}</button> </li> : null}

          <li>{isLogin? 
          <button 
          onClick={()=>{localStorage.removeItem('Lufthansa-user')
          setIsLogin(false)
          }}>Logout
          </button>: 
          <button 
          onClick={()=>history.push("/signin")}>
            Login</button>}
            </li>
        </ul>
      </nav>
    </header>
  
  )
}
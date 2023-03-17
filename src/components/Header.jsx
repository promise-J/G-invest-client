import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo1 from "../images/favicon.png";
import {TfiMenu, TfiClose} from 'react-icons/tfi'

const Header = ({setShowMenu, showMenu}) => {
  const navigate = useNavigate()
  const [isLogged, setIsLogged] = useState(false)
  const logout = ()=>{
    navigate('/')
    localStorage.removeItem('IToken')
  }
  
  useEffect(()=>{
    localStorage.getItem('IToken') ? setIsLogged(true) : setIsLogged(false)
  },[setIsLogged])

  return (
    <>
    <header>
        <TfiMenu className="open" style={{position: 'absolute', top: 15, left: 30, cursor: 'pointer'}} onClick={()=> setShowMenu(true)} color="white" size={25} />
        <Link to='/'>
        <img style={{ height: 50, width: 50 }} src={Logo1} alt='logo' />
        </Link>
        <ul style={{display: showMenu ? 'flex' : 'none'}}>
          <TfiClose onClick={()=> setShowMenu(false)} className='close' />
          <Link onClick={()=> setShowMenu(false)} className="link" to='/login'>
          <li>Login</li>
          </Link>
          <Link onClick={()=> setShowMenu(false)} className="link" to='/register'>
          <li>Register</li>
          </Link>
          {isLogged && <li onClick={logout}>Logout</li>}
        </ul>
    </header>
    <div className="header-offset"></div>
    </>
  );
};

export default Header;

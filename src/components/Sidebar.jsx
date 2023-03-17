import React, { useEffect, useState } from "react";
import {MdOutlineCancel} from 'react-icons/md'
import { useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { sidebarLinks } from "../data";

const Sidebar = ({showSidebar, setShowSidebar}) => {
  const {pathname} = useLocation()
  const {user} = useSelector(state=> state.user)
  const navigate = useNavigate()

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  });

  useEffect(()=>{
    if(!user){
      console.log('there is no user')
      navigate('/login')
    }
  })

  const handleShow = (show)=>{
    if(windowWidth<=900){
      if(show){
        return '90%'
      }else{
        return 0
      }
    }
  }

  const logout = ()=>{
    console.log('logging out')
    localStorage.removeItem('IToken')
    window.location.href = '/'
  }

  return (
    <div style={{width: handleShow(showSidebar)}} className="sidebar">
      <div className="wrapper">
        <MdOutlineCancel className="sidebar-close" onClick={()=> setShowSidebar(false)} style={{position: 'absolute', top: 30, right: 30}} size={23} />
        <div className="sidebar-heading">
          Uk-Globals
        </div>
        <h6>Dashboard</h6>
        <ul>
          {
            sidebarLinks.map(el=> (
              <li onClick={()=> setShowSidebar(false)} key={el.id} className={el.link === pathname ? 'active' : ''}>
                <Link style={{width: '100%', height:'100%', display: 'flex', alignItems: 'center'}} className="link" to={el.link}>
                {
                  el.icon
                }
                {
                  el.text
                }
                </Link>
              </li>
            ))
          }
          <li onClick={logout} style={{textAlign: 'center', fontWeight: 500, display: 'flex', alignItems: 'center', paddingLeft: 50}}>Logout</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;

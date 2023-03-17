import React, { useState } from 'react'
import {Outlet} from 'react-router-dom'
import Header from '../components/Header'

const Layout = () => {
  const [showMenu, setShowMenu] = useState(false)
  return (
    <>
        <Header setShowMenu={setShowMenu} showMenu={showMenu} />
        <Outlet />
    </>
  )
}

export default Layout
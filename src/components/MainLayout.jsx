// import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'
import { Theme } from './providers/Theme'

const MainLayout = () => {
  return (
    <Theme>
      <Header/>
        <Outlet />
      <Footer/>
    </Theme>
    
  )
}

export default MainLayout

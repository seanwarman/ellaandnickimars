import React from 'react'
import Menu from './Menu.js'
import Navbar from './Navbar.js'
import Footer from './Footer.js'

import './Layout.css'

function Layout({
  children
}) {
  return <div id="layout">
    <Navbar />
    <Menu />
    {children}
    <Footer />
  </div>
}

export default Layout

import React from 'react'
import Menu from './Menu.js'
import Modal from './Modal.js'
import Navbar from './Navbar.js'
import Footer from './Footer.js'

import './Layout.css'

function Layout({
  children
}) {
  return <div id="layout">

    <Navbar />
    <Menu />
    <Modal />

    {children}

  </div>
}

export default Layout

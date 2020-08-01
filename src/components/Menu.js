import React from 'react'
import { connect } from 'react-redux'
import { OPEN_MENU } from '../constants.js'

import MenuLinks from './MenuLinks.js'

import './Menu.css'

function menuOuterWrapperStyle(menuOpen) {
  return {
    /* note. this is 430 rather than 400 to hide 
    the shadow... */
    left: menuOpen ? '0px' : '-430px'
  }
}

function greyedOutStyle(menuOpen) {
  return {
    opacity: menuOpen ? 0.3 : 0,
    pointerEvents: menuOpen ? 'unset' : 'none'
  }
}

function Menu({
  menuOpen,
  openMenu
}) {
  return (
    <div id="menu">
      <div className="menu-outer-wrapper" style={menuOuterWrapperStyle(menuOpen)}>
      <div className="menu-inner-wrapper">
          <h4>Project Timeline</h4>
          <div className="underline-wrapper">
            <div className="underline"></div>
          </div>

          <MenuLinks />

        </div>
      </div>
      <div onClick={() => openMenu(false)} className="greyed-out" style={greyedOutStyle(menuOpen)}>
      </div>
    </div>
  )
}

export default connect(
  state => ({
    menuOpen: state.menuOpen
  }),
  {
    openMenu: menuOpen => ({ type: OPEN_MENU, menuOpen })
  }
)(Menu)

import React from 'react'
import { connect } from 'react-redux'
import { OPEN_MENU } from '../contants.js'

import './Menu.css'

function background(img) {
  return {
    backgroundImage: 'url(' + img + ')'
  }
}

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
  
          <a href="index.html" className="item-wrapper">
            <div className="circle-wrapper">
              <div className="circle" style={background('../assets/pictures/menu-icons/hero-building-a-martian-house-main.webp')}>
              </div>
            </div>
            <p>
              Building a Martian House
            </p>
          </a>
  
          <a href="filmclub.html" className="item-wrapper">
            <div className="circle-wrapper">
              <div className="circle" style={background('../assets/pictures/menu-icons/film-club-rocket-landed.webp')}>
              </div>
            </div>
            <p>
              The World and Mars<br />
              <small>A Summer Holiday Film Club</small>
            </p>
          </a>
  
          <a href="spacefortrees.html" className="item-wrapper">
            <div className="circle-wrapper">
              <div className="circle" style={background('../assets/pictures/menu-icons/space-for-trees-sign.webp')}>
              </div>
            </div>
            <p>
              Space for Trees
            </p>
          </a>
  
          <a href="thelaunches.html" className="item-wrapper">
            <div className="circle-wrapper">
              <div className="circle" style={background('../assets/pictures/menu-icons/the-launches-sunrise.webp')}>
              </div>
            </div>
            <p>
              The Launches
            </p>
          </a>
  
          <a href="totaleclipseofthehead.html" className="item-wrapper">
            <div className="circle-wrapper">
              <div className="circle" style={background('../assets/pictures/menu-icons/total-eclipse-hero.webp')}>
              </div>
            </div>
            <p>
              Total Eclipse of the Head
            </p>
          </a>
  
          <a href="adecadewithmars.html" className="item-wrapper">
            <div className="circle-wrapper">
              <div className="circle" style={background('../assets/pictures/menu-icons/decade-with-mars-hero.webp')}>
              </div>
            </div>
            <p>
              A Decade With Mars
            </p>
          </a>
  
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

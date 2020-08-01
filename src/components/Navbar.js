import React from 'react'
import { connect } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleLeft, faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons'
import { faSmileBeam } from '@fortawesome/free-regular-svg-icons'
import { faWordpress } from '@fortawesome/free-brands-svg-icons'
import { OPEN_MENU, OPEN_MODAL } from '../constants.js'

import './Navbar.css'

// I'm wrapping all the icons in "i" tags for the original styles
const Icon = ({icon: Ico}) => <i><FontAwesomeIcon icon={Ico} /></i>

function Navbar({
  menuOpen,
  openMenu,
  modalOpen,
  openModal
}) {
  return (
    <div id="navbar">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6 col-8 nav-link-wrapper">

            <div className="nav-link" onClick={() => openMenu(!menuOpen)}>

              <Icon icon={menuOpen ? faAngleDoubleRight : faAngleDoubleLeft} />
              <span>Projects</span>

            </div>
            <a className="nav-link" target="_blank" href="https://ellaandnicki.wordpress.com/">

              <Icon icon={faWordpress} />
              <span>Blog</span>

            </a>
            <div className="nav-link" id="donate-button" onClick={() => openModal(!modalOpen)}>

              <Icon icon={faSmileBeam} />
              <span>Donate</span>

            </div>
              
          </div>
          
          <div className="col-lg-6 col-4 brand-wrapper">
            <h3 className="brand">Ella&Nicki</h3>
          </div>

        </div>
      </div>
    </div>
  )
}

export default connect(
  state => ({
    menuOpen: state.menuOpen,
    modalOpen: state.modalOpen
  }),
  {
    openMenu: menuOpen => ({ type: OPEN_MENU, menuOpen }),
    openModal: modalOpen => ({ type: OPEN_MODAL, modalOpen })
  }
)(Navbar)

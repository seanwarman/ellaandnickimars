import React, { useState } from 'react'
import { connect } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faPoundSign } from '@fortawesome/free-solid-svg-icons'
import { OPEN_MODAL, SET_DONATION } from '../constants.js'

import icon from '../assets/pictures/icon-mountains-of-mars.webp'

import './Modal.css'

function modalStyle(modalOpen, delayedDisplay) {
  return {
    pointerEvents: modalOpen ? 'all' : 'none',
    display: delayedDisplay ? 'flex' : 'none'
  }
}

function dialogueStyle(modalOpen) {
  return {
    top: modalOpen ? 0 : -400,
    opacity: modalOpen ? 1 : 0,
  }
}

function backgroundStyle(modalOpen) {
  return {
    display: modalOpen ? 'block' : 'none'
  }
}

function Modal({
  modalOpen,
  openModal,
  delayedDisplay,
  donation,
  setDonation
}) {

  return (

    <div id="modal" style={modalStyle(modalOpen, delayedDisplay)}>

      <div id="modal-dialogue" style={dialogueStyle(modalOpen)}>
        <div className="modal-content">
          <div className="modal-body">

            <div onClick={() => openModal(false)} className="modal-close">
              <FontAwesomeIcon className="close-icon" icon={faTimes} />
            </div>

            <p className="payment-icon-wrapper">
              <img src={icon} alt="mountains-of-mars-icon"  />
            </p>

            <h2>Thank you for your donation!</h2>

            <p>
              All proceeds will go directly to the
              artists in support of their work.
            </p>

            <FontAwesomeIcon icon={faPoundSign} />

            <input 
              id="donation-amt" 
              name="donation-amt" 
              type="number" 
              defaultValue={donation} 
              min="1" 
              onChange={e => setDonation(e.target.value)}
            />

            <div className="paypal-buttons"></div>

          </div>
        </div>
      </div>

      <div 
        className="modal-background" 
        style={backgroundStyle(modalOpen)} 
        onClick={() => openModal(false)}
      ></div>
    </div>

  )
}

export default connect(
  state => ({
    modalOpen: state.modalOpen,
    delayedDisplay: state.delayedDisplay,
    donation: state.donation
  }),
  {
    openModal: modalOpen => ({ type: OPEN_MODAL, modalOpen }),
    setDonation: donation => ({ type: SET_DONATION, donation })
  }
)(Modal)

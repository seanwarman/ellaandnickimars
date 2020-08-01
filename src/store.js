import { createStore, applyMiddleware } from 'redux'
import {
  OPEN_MENU,
  OPEN_MODAL,
  SET_DELAY_MODAL
} from './constants.js'
import middleware from './middleware.js'

const store = createStore(
  (state = {

    menuOpen: false,
    modalOpen: false,
    delayedDisplay: false

  }, action) => (

    action.type === OPEN_MENU ?
    {
      ...state,
      menuOpen: action.menuOpen
    }
    :
    action.type === OPEN_MODAL ?
    {
      ...state,
      modalOpen: action.modalOpen
    }
    :
    action.type === SET_DELAY_MODAL ?
    {
      ...state,
      delayedDisplay: action.delayedDisplay
    }
    :
    state

), applyMiddleware(middleware))

export default store

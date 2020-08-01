import { createStore, applyMiddleware, compose } from 'redux'
import {
  OPEN_MENU,
  OPEN_MODAL,
  SET_DELAY_MODAL,
  SET_DONATION
} from './constants.js'
import middleware from './middleware.js'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  (state = {

    menuOpen: false,
    modalOpen: false,
    delayedDisplay: false,
    donation: 5

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
    action.type === SET_DONATION ?
    {
      ...state,
      donation: action.donation
    }
    :
    state

), composeEnhancers(applyMiddleware(middleware)))

export default store

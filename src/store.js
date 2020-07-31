import { createStore } from 'redux'
import {
  OPEN_MENU,
  OPEN_MODAL
} from './contants.js'

const store = createStore(
  (state = {

    modalOpen: false,
    menuOpen: false

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
    state

  )
)

export default store

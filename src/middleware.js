import {
  OPEN_MODAL,
  SET_DELAY_MODAL
} from './constants.js'

let timerID

const middleware = store => next => action => {

  if(action.type === OPEN_MODAL) return modalAnimationDelay(next, action)

  next(action)

}


function modalAnimationDelay(next, action) {

  const { modalOpen: delayedDisplay } = action

  if(timerID) clearTimeout(timerID)



  if(delayedDisplay) {

    next({ type: SET_DELAY_MODAL, delayedDisplay })
    timerID = setTimeout(() => next(action), 1)

  } else {

    next(action)
    timerID = setTimeout(() => next({ type: SET_DELAY_MODAL, delayedDisplay }), 500)

  }


}


export default middleware

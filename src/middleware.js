import {
  OPEN_MODAL,
  SET_DELAY_MODAL
} from './constants.js'

let timerID
let chimpValid = false

const middleware = store => next => action => {

  if(action.type === OPEN_MODAL) {
    initialisePaypalButtons(store)
    return modalAnimationDelay(next, action);
  }

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


let paypalButtons

function initialisePaypalButtons(store) {
 
  if(paypalButtons) return 

  paypalButtons = true

  paypal.Buttons({
    createOrder: function(data, actions) {
      // Set up the transaction
      return actions.order.create({
        purchase_units: [{
          amount: {
            value: store.getState().donation
          }
        }]
      });
    },
    onApprove: function(data, actions) {
      // Capture the funds from the transaction
      return actions.order.capture().then(function(details) {
        // Show a success message to your buyer
        alert('Transaction completed by ' + details.payer.name.given_name);
      });
    }
  }).render('.paypal-buttons')

}

export default middleware

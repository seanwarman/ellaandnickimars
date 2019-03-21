let open = false;
const innerModal = document.getElementById('modal-dialogue');
const body = document.getElementsByTagName('body')[0];
const modal = document.getElementById('modal');
const button = document.getElementById('donate-button');
const close = document.getElementsByClassName('close-icon')[0];

var openModal = function() {
  if(!open) {
    modal.style.display = 'flex';
    body.className = 'modal-open';
    setTimeout( () => {
      modal.className = 'fade-in';
      innerModal.className = 'modal-scroll-view';
    }, 10);
  } else {
    
    body.className = '';
    setTimeout( () => {
      modal.className = '';
      innerModal.className = '';
    }, 1);
    setTimeout( () => {
      modal.style.display = 'none';
    }, 500);
  }
  open = !open;
}

var preventClick = function(event) {
  event.stopPropagation();
}

button.addEventListener('click', openModal);
modal.addEventListener('click', openModal);
innerModal.addEventListener('click', preventClick);
close.addEventListener('click', openModal);

let input = document.getElementById('donation-amt');

paypal.Buttons({
  createOrder: function(data, actions) {
      // Set up the transaction
      return actions.order.create({
        purchase_units: [{
          amount: {
            value: input.value
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
  }).render('.paypal-buttons');

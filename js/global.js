var plxGroup = document.getElementsByClassName('plx-group');
var plxPage = document.getElementsByClassName('plx-page')[0];
var navbar = document.getElementById('navbar');

if(plxGroup && plxPage && navbar) {
  var adjustViewHeight = () => {
    plxPage.style.paddingTop = navbar.clientHeight+'px';
    for(var i = 0, length1 = plxGroup.length; i < length1; i++){
      plxGroup[i].style.height = window.innerHeight - navbar.clientHeight+'px';
    }
  }
  adjustViewHeight();
  
  window.addEventListener('resize', () => {
    adjustViewHeight();
  });
}

window.addEventListener('load', () => {
  document.body.classList.remove('hide-me');
});

var state = false;

var clickMenu = function() {
  var menu = document.getElementsByClassName('menu-outer-wrapper')[0];
  var greyedOut = document.getElementsByClassName('greyed-out')[0];
  var icon = document.getElementById('menu-icon');
  if(state === false) {
    menu.style.left = '0px';
    greyedOut.style.opacity = '.3';
    state = true;
    icon.classList = ['fas fa-angle-double-left'];
  } else {
    menu.style.left = '-430px';
    greyedOut.style.opacity = '0';
    state = false;
    icon.classList = ['fas fa-angle-double-right'];
  }
}
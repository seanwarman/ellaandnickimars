var plxGroup = document.getElementsByClassName('plx-group');
var plxPage = document.getElementsByClassName('plx-page')[0];
var navbar = document.getElementById('navbar');

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

window.addEventListener('load', () => {
  document.body.classList.remove('hide-me');
});
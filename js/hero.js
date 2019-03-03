let background = document.getElementById('background');
let foreground = document.getElementById('foreground');
let midground = document.getElementById('midground');
let number = 0;

let heroWrapper = document.getElementsByClassName('hero-wrapper')[0];

let windowHeight = window.innerHeight;

heroWrapper.style.height = windowHeight+'px';

var scroll = Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop);

document.addEventListener('scroll', (event) => {
  background.style.bottom = ((window.pageYOffset*2.3) * -1)+'px';
  foreground.style.bottom = Math.min(0, ((window.pageYOffset/4) + -300))+'px';
});
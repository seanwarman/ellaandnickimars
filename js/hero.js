let background = document.getElementById('background');
let foreground = document.getElementById('foreground');
let midground = document.getElementById('midground');
let number = 0;

let heroWrapper = document.getElementsByClassName('hero-wrapper')[0];

let windowHeight = window.innerHeight;

heroWrapper.style.height = windowHeight+'px';

var scroll = Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop);

// function debounce(func, wait, immediate) {
//   var timeout;
//   return function() {
//     var context = this, args = arguments;
//     var later = function() {
//       timeout = null;
//       if (!immediate) func.apply(context, args);
//     };
//     var callNow = immediate && !timeout;
//     clearTimeout(timeout);
//     timeout = setTimeout(later, wait);
//     if (callNow) func.apply(context, args);
//   };
// };

// var animate = debounce(function() {
//   window.requestAnimationFrame(() => {
//     background.style.transform =  'translate(0, '+((window.pageYOffset*2.3))+'px)';
//   });
//   window.requestAnimationFrame(() => {
//     foreground.style.transform = 'translate(0, '+Math.min(0, (window.pageYOffset/4)* -1)+'px';
//   });
// }, 10)

var animate = () => {
  window.requestAnimationFrame(() => {
    background.style.transform =  'translate(0, '+(window.pageYOffset*2.3)+'px)';
  });
  window.requestAnimationFrame(() => {
    foreground.style.transform = 'translate(0, '+Math.min(0, (window.pageYOffset/4)* -1)+'px)';
  });
}

document.addEventListener('scroll', animate);
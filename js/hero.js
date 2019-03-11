let landscape = document.getElementsByClassName('mars-landscape')[0];
let page = document.getElementsByClassName('plx-page')[0];

const initialPosition = 40;

var landscapePosition = () => {
  landscape.style.backgroundPosition = '0 ' + (((page.scrollTop/20)* -1)+initialPosition) + '%';
}
landscapePosition();
page.addEventListener('scroll', () => {
  landscapePosition();
});

let letters = document.getElementsByClassName('title-letter');

var animateTitle = (num, attribute, value) => {
  if(num < letters.length) {
    letters[num].style[attribute] = value;
    num++;
    setTimeout(animateTitle, 40, num, attribute, value);
  }
}

window.addEventListener('load', () => {

  animateTitle(0, 'textShadow', '0 0 10px #ffffff');
  setTimeout(animateTitle, 1000, 0, 'textShadow', '0 0 0 #ffffff');
  setTimeout(animateTitle, 1700, 0, 'textShadow', '0 0 0 #ffffff00');
  setTimeout(animateTitle, 2000, 0, 'color', '#ffffff');
  // setTimeout( () => {
  //   for(var i = 0, length1 = letters.length; i < length1; i++){
  //     letters[i].style.color = '#ffffff';
  //   }
  // }, 5000);
  
});


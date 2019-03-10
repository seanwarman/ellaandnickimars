let landscape = document.getElementsByClassName('mars-landscape')[0];
let page = document.getElementsByClassName('plx-page')[0];

const initialPosition = 40;

var animate = () => {
  landscape.style.backgroundPosition = '0 ' + (((page.scrollTop/20)* -1)+initialPosition) + '%';
}
animate();
page.addEventListener('scroll', () => {
  animate();
});
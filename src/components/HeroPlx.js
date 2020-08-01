import React, { useEffect } from 'react'

import background from '../assets/pictures/3dhero/hero-building-a-martian-house-background-stretched-2.webp'
import midground from '../assets/pictures/3dhero/hero-building-a-martian-house-midground.webp'
import foreground from '../assets/pictures/3dhero/hero-building-a-martian-house-foreground.webp'

import './HeroPlx.css'

function imgStyle(img) {
  return {
    backgroundImage: `url(${img})`
  }
}

function Title({
  children: title
}) {

  const words = title.split(' ')

  return (

    <div className="plx-layer main-title-wrapper plx-back">
      <div className="main-title">

        {
          words.map((word, wIndx) => (

            <span className="word" key={wIndx}>

              {
                word.split('').map((letter, lIndx) => (

                  <div className="title-letter" key={lIndx}>
                    {letter}
                  </div>

                ))
              }

            </span>

          ))
        }

      </div>
    </div>

  )
}

function HeroPlx({
  title
}) {

  useEffect(() => {
    animate()
  })

  return <div id="hero">

    <div className="mars-landscape"
      style={imgStyle(background)}
    ></div>
    <div className="hero plx-group">
      <div className="plx-layer plx-back mars-hills"
        style={imgStyle(midground)}
      ></div>
      <div className="plx-layer plx-mid mars-people"
        style={imgStyle(foreground)}
      ></div>

      <Title>{title}</Title>

    </div>

  </div>
}

export default HeroPlx

function animate() {
  let landscape = document.getElementsByClassName('mars-landscape')[0];
  let page = document.getElementsByClassName('plx-page')[0];

  const initialPosition = 40;

  const landscapePosition = () => {
    landscape.style.backgroundPosition = '0 ' + (((page.scrollTop/20)* -1)+initialPosition) + '%';
  }
  landscapePosition();
  page.addEventListener('scroll', () => {
    landscapePosition();
  });

  let letters = document.getElementsByClassName('title-letter');

  const animateTitle = (num, attribute, value) => {
    if(num < letters.length + 1) {
      letters[num].style[attribute] = value;
      num++;
      setTimeout(animateTitle, 40, num, attribute, value);
    }
  }

  window.addEventListener('load', () => {
    animateTitle(0, 'textShadow', '0 0 10px #ffffff');
    setTimeout(animateTitle, 1000, 0, 'textShadow', '0 0 0 #ffffff');
    setTimeout(animateTitle, 1700, 0, 'textShadow', '0 0 0 #ffffff00');
    setTimeout(animateTitle, 2000, 0, 'color', 'rgba(255, 255, 255, 1)');
  });
}

import React, { useEffect, useState } from 'react'

import './HeroPlx.css'


function PlxTitle({
  children: title
}) {

  const words = title.split(' ')

  useEffect(() => { 

    let letters = document.getElementsByClassName('title-letter')

    const animateTitle = (num, attribute, value) => {
      if(num < letters.length + 1) {
        if(letters[num]) letters[num].style[attribute] = value
        num++
        setTimeout(animateTitle, 40, num, attribute, value)
      }
    }

    animateTitle(0, 'textShadow', '0 0 10px #ffffff')
    setTimeout(animateTitle, 1000, 0, 'textShadow', '0 0 0 #ffffff')
    setTimeout(animateTitle, 1700, 0, 'textShadow', '0 0 0 #ffffff00')
    setTimeout(animateTitle, 2000, 0, 'color', 'rgba(255, 255, 255, 1)')

  })

  return (

    <div className="plx-layer main-title-wrapper">
      <div className="main-title">

        {
          words.map((word, wIndx) => (

            <span className="word" key={wIndx}>

              {
                word.split('').map((letter, lIndx) => (

                  <div
                    className="title-letter" 
                    key={lIndx}
                  >
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

export default PlxTitle

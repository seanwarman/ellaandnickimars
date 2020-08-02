import React, { useState, useEffect } from 'react'
import './Hero.css'

function imgStyle(img, style = {}) {

  return {
    backgroundImage: `url(${img})`,
    ...style
  }

}

const mediaWidth = (index, setIndex) => {

  const width = 576

  if(window.innerWidth <= width && index === 1) setIndex(0)
  if(window.innerWidth > width && index === 0) setIndex(1)

  return ({ target }) => {

    if(target.innerWidth <= width && index === 1) setIndex(0)
    if(target.innerWidth > width && index === 0) setIndex(1)

  }
}


function Hero({
  heading,
  subheading,
  background,
  style
}) {


  const [ index, setIndex ] = useState(0)

  const [ hidden, setHidden ] = useState(true)

  useEffect(() => {

    const setByWidth = mediaWidth(index, setIndex)

    window.addEventListener('resize', setByWidth)

    setHidden(false)

    return function willUnmount() {
      window.removeEventListener('resize', setByWidth)
    }

  })

  return (
    <div id="hero"
      style={imgStyle(background[index], style)}
    >

      <h1 className="banner">{heading}</h1>

      {
        subheading &&
        <h4 className="sub">{subheading}</h4>
      }

    </div>
  )
}


export default Hero

import React, { useEffect, useState } from 'react'
import { withRouter } from 'react-router-dom'
import PlxTitle from './PlxTitle.js'

import './HeroPlx.css'

function initialiseAnimation(init, speed) {
  let landscape = document.getElementsByClassName('hero-background')[0]
  let page = document.getElementsByClassName('plx-page')[0]

  const initialPosition = init

  const landscapePosition = () => {
    landscape.style.backgroundPosition = '0 ' + (((page.scrollTop/20)* speed)+initialPosition) + '%'
  }
  landscapePosition()

  page.addEventListener('scroll', () => {
    landscapePosition()
  })

}

function imgStyle(img) {

  return {
    backgroundImage: `url(${img})`
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

function HeroPlx({
  title,
  location,
  background,
  midground,
  foreground,
  speed = -1.5,
  init = 55
}) {

  const [ index, setIndex ] = useState(0)

  const [ hidden, setHidden ] = useState(true)

  useEffect(() => {

    initialiseAnimation(init, speed)

    const setByWidth = mediaWidth(index, setIndex)

    window.addEventListener('resize', setByWidth)

    setHidden(false)

    return function willUnmount() {
      window.removeEventListener('resize', setByWidth)
    }

  })

  return <div id="hero" className={hidden ? 'hidden' : 'unhidden'}>

    <div className="hero-background"
      style={imgStyle(background[index])}
    ></div>

    <div className="hero plx-group">

      <div className="plx-layer plx-back hero-midground"
        style={imgStyle(midground[index])}
      ></div>

      <div className="plx-layer plx-mid hero-foreground"
        style={imgStyle(foreground[index])}
      ></div>

      <PlxTitle>{title}</PlxTitle>

    </div>

  </div>
}

export default withRouter(HeroPlx)


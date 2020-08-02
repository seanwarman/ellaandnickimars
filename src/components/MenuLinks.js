import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { OPEN_MENU } from '../constants.js'

import img1 from '../assets/pictures/menu-icons/hero-building-a-martian-house-main.webp'
import img2 from '../assets/pictures/menu-icons/film-club-rocket-landed.webp'
import img3 from '../assets/pictures/menu-icons/space-for-trees-sign.webp'
import img4 from '../assets/pictures/menu-icons/the-launches-sunrise.webp'
import img5 from '../assets/pictures/menu-icons/total-eclipse-hero.webp'
import img6 from '../assets/pictures/menu-icons/decade-with-mars-hero.webp'

const links = [
  {
    title: 'Building a Martian House',
    img: img1,
    link: '/'
  },
  {
    title: <span>
      The World and Mars<br />
      <small>A Summer Holiday Film Club</small>
    </span>,
    img: img2,
    link: '/theworldandmars'
  },
  {
    title: 'Space for Trees',
    img: img3,
    link: '/spacefortrees'
  },
  {
    title: 'The Launches',
    img: img4,
    link: '/thelaunches'
  },
  {
    title: 'Total Eclipse of the Head',
    img: img5,
    link: '/totaleclipseofthehead'
  },
  {
    title: 'A Decade With Mars',
    img: img6,
    link: '/adecadewithmars'
  },
]


function background(img) {
  return {
    backgroundImage: 'url(' + img + ')'
  }
}

function MenuLinks({ openMenu }) {
  return (

    links && links.map(({link, img, title}, i ) => (

      <Link 
        onClick={() => openMenu(false)}
        key={i} 
        to={link} 
        className="item-wrapper"
      >
        <div className="circle-wrapper">
          <div className="circle" style={background(img)}>
          </div>
        </div>
        <p>
          {title}
        </p>
      </Link>

    ))
  )
}

export default connect(
  null, {
    openMenu: menuOpen => ({ type: OPEN_MENU, menuOpen })
  }
)(MenuLinks)

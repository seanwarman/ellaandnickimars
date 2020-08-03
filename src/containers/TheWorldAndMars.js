import React from 'react'
import Hero from '../components/Hero.js'
import Footer from '../components/Footer.js'
import Contact from '../components/Contact.js'

import filmClub from '../assets/pictures/film-club-rocket-landed.jpg'
import bigImage from '../assets/pictures/film-club-rocket.webp'

import icon1 from '../assets/pictures/icon-crazy-table.webp'
import icon2 from '../assets/pictures/film-club-green-screen.webp'
import icon3 from '../assets/pictures/icon-mars-car.webp'

import './TheWorldAndMars.css'

function TheWorldAndMars() {
  return (
    <div id="the-word-and-mars">

      <Hero
        background={[filmClub, filmClub]}
        heading="The World and Mars"
        subheading="A Summer Holiday Film Club"
      ></Hero>

      <div id="film-club"> 
        <div className="container body-container">
          <div className="row">
            <div className="col-12 weak-center">
              <img 
                className="head-icon-sm" 
                src={icon1}
                alt="mountains-of-mars-icon" 
              />
            </div>
            <div className="col-12 weak-center padder">
              <h2>About</h2>
            </div>
          </div>
          <div className="row padder">
            <div className="col-12 big-image"
              style={{ backgroundImage: `url(${bigImage})` }}
            ></div>
          </div>
          <div className="row">
            <div className="col-md-5 col-12 weak-center padder middler">
              <img 
                className="big-circle" 
                src={icon2}
                alt="ella-and-nicki" 
              />
            </div>
            <div className="col-md-7 col-12 padder middler">
              <p className="about">
                In Summer 2017, we ran a club for children aged 8-10 in
                Bristol. The club met once a week over the summer
                holidays with the aim of making a film about what it
                would be like to live on Mars.
              </p>
              <p className="about">
                We worked alongside film maker David Ravenscroft to 
                explore the children's ideas and made a ten minute 
                film using model making, drawing and stop motion 
                animation. 
              </p>
              <p className="about">
                The film premiered at The Wardrobe Theatre in Bristol 
                for an audience of family and friends, and has since 
                been exhibited at science center <a href="https://www.wethecurious.org/">We The Curious</a>. 
              </p>
            </div>
          </div>
        </div> 
        {/*
          <!-- END section 1 -->
        */}
        <div className="container-fluid red">
          <div className="container body-container">
            <div className="row">
              <div className="col-12 weak-center">
                <img src={icon3} alt="rover-icon" className="head-icon-lg" />
              </div>
            </div>
            <div className="row">
              <div className="col-12 weak-center padder">
                <h2 className="white">The World and Mars</h2>  
              </div>
            </div>
            <div className="row padder">
              <iframe 
                width="100%" 
                className="video" 
                src="https://www.youtube.com/embed/iSCK77v9mIY" 
                frameBorder="0" 
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen
              >
              </iframe>
            </div>
          </div>
        </div>


      </div>  

      <Contact />

      <Footer />

    </div>
  )
}

export default TheWorldAndMars

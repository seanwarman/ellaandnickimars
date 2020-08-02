import React from 'react'

import Hero from '../components/Hero.js'

import backgroundDesktop from '../assets/pictures/total-eclipse-window-sign.webp'
import backgroundMobile from '../assets/pictures/mobile-total-eclipse-window-sign.webp'
import image1 from '../assets/pictures/total-eclipse-hero.webp'

import gallery1 from '../assets/pictures/total-eclipse-family.webp'
import gallery2 from '../assets/pictures/total-eclipse-image.webp'
import gallery3 from '../assets/pictures/total-eclipse-hair-family.webp'
import gallery4 from '../assets/pictures/total-eclipse-hair-salon.webp'

import icon1 from '../assets/pictures/icon-total-eclipse-razor.webp'
import icon2 from '../assets/pictures/icon-caravan.webp'

function galleryStyle(img, position) {
  return {
    backgroundImage: `url(${img})`,
    backgroundPosition: position
  }
}

function TotalEclipseOfTheHead() {
  return (
    <div>

      <Hero
        background={[backgroundMobile, backgroundDesktop]}
        heading="Total Eclipse of the Head"
        style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          backgroundSize: 'cover',
          paddingTop: '48px',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'right',
        }}
      ></Hero>

    <div id="total-eclipse">


      <div className="container body-container">
        <div className="row">
          <div className="col-12 weak-center">
            <img className="head-icon" src={icon1} alt="mountains-of-mars-icon" />
          </div>
          <div className="col-12 weak-center padder">
            <h2>About</h2>
          </div>
        </div>
        <div className="row padder">
          <div className="col-12">
            <p className="about">
              Total Eclipse of The Head is a mobile hair salon in a vintage caravan, with an emphasis on conversation and alternative exchange. The idea originally began at Burning Man Festival in Arizona. 
            </p>
            <p className="about">
              An informal space where people can meet, sit, chat, look through photo albums, listen to music and have their hair cut or styled if they choose.
            </p>
            <p className="about">
              Hairdressing is loosely themed around music. People can choose playlists with hairstyles to match, from The Kate Bush Bush, the 80's Power Mullet Montage, or Crimping Back to the 90s.
            </p>
          </div>
        </div>
      </div>
      {/*
        <!-- END section 1 -->
      */}
      <div className="container-fluid orange">
        <div className="container body-container">
          <div className="row">
            <div className="col-12 weak-center">
              <img src={icon2} alt="rover-icon" className="head-icon" />
                <h2 className="white padder">A Festival on Wheels</h2>  
              </div>
            </div>
            <div className="row padder">
              <div className="col-12">
                <div className="bg-image" style={{
                  backgroundImage: `url(${image1})`,
                  height: '400px'
                }}></div>
              </div>
            </div>
            <div className="row">
              <div className="col-12 padder">
                <p className="white">
                  Total Eclipse of The Head toured from 2011 - 2018 all over the UK and beyond - from festivals like Glastonbury and Latitude, venues like The National Theatre, The Barbican and Bristol Museum, local community events like Brighton Pride, live art festivals such as Buzzcut and In Between Time, University Fresher's Balls, and many vintage events such as Liverpool On The Dock and Batley Vintage Day. It even made it as far as Dublin. 
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container body-container">
          <div className="row">
            <div className="gallery-wrapper">
              <div className="gallery" style={galleryStyle(gallery1, 'center')}></div>
            </div>
            <div className="gallery-wrapper">
              <div className="gallery" style={galleryStyle(gallery2, 'center')}></div>
            </div>
            <div className="gallery-wrapper">
              <div className="gallery" style={galleryStyle(gallery3, 'center')}></div>
            </div>
            <div className="gallery-wrapper">
              <div className="gallery" style={galleryStyle(gallery4, 'center')}></div>
            </div>
          </div>
        </div>


      </div> 


    </div>
  )
}

export default TotalEclipseOfTheHead

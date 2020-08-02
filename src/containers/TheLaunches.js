import React from 'react'
import Hero from '../components/Hero.js'

import backgroundDesktop from '../assets/pictures/the-launches-sunrise.webp'
import backgroundMobile from '../assets/pictures/mobile-the-launches-sunrise.webp'

import icon1 from '../assets/pictures/icon-weather-balloon.webp'
import icon2 from '../assets/pictures/icon-launches-go-pro.webp'

import image1 from '../assets/pictures/the-launches-launch.webp'
import gallery1 from '../assets/pictures/the-launches-celebration.webp'
import gallery2 from '../assets/pictures/the-launches-news.webp'
import gallery3 from '../assets/pictures/the-launches-above-park.webp'
import gallery4 from '../assets/pictures/the-launches-earth-curve.webp'

import './TheLaunches.css'

function galleryStyle(img, position) {
  return {
    backgroundImage: `url(${img})`,
    backgroundPosition: position
  }
}

function backgroundStyle(img) {
  return {
    backgroundImage: `url(${img})`
  }
}

function TheLaunches() {
  return (
    <div>

      <Hero
        heading="The Launches"
        background={[backgroundMobile, backgroundDesktop]}
      ></Hero>

      <div id="the-launches">
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
          <div className="row padder" style={{ justifyContent: 'space-around' }}>
            <div className="col-12 col-sm-8 col-lg-5">
              <p>
                Throughout 2015, we launched a series of weather
                balloons around the UK. We launched from Hull, Bristol,
                Leeds, London, Lancaster and Bath.
              </p>
              <p>
                What is a weather balloon? Before we started we didn't
                know much about them either.
              </p>
              <p>
                They're helium filled
                balloons that can travel up to 100,000 feet and are
                usually used by the MET office to measure weather.
              </p>
              <p>
                We
                decided to send up our own balloons with cameras on to
                try and get as close to space as we could.
              </p>
              <p>
                The launches marked the beginning of our ten year series
                of works about space and Mars, as an attempt to get as
                close to space as we are able to ourselves.
              </p>
              <p>
                In each city we spent a week working with primary schools
                and community groups. Lots of people came out to launch
                the balloon with us from a public park on the weekend.
              </p>
            </div>
            <div className="col-12 col-sm-4 intro-image" style={backgroundStyle(image1)}>
            </div>
          </div>
        </div>
        <div className="container-fluid blue">
          <div className="container body-container">
            <div className="row">
              <div className="col-12 weak-center">

                <img
                className="head-icon-sm"
                src={icon2}
                alt="mars-sketch"
                />

                <h2 className="white padder">The Curve of the Earth</h2>  
              </div>
            </div>
            <div className="row padder">
              <iframe
              width="100%"
              className="video"
              src="https://www.youtube.com/embed/69YeWFY_3Gc"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
            </iframe>
          </div>

          </div>
        </div>

        <div className="container body-container">
          <div className="row padder">
              <div className="gallery-wrapper">
                <div className="gallery" style={galleryStyle(gallery1, '50% 75%')}>
                  <div className="quote-wrapper">
                    <p>
                      Finding a balloon that landed in The Peak District.
                    </p>
                  </div>
                </div>
              </div>
              <div className="gallery-wrapper">
                <div className="gallery" style={galleryStyle(gallery2, 'top')}>
                  <div className="quote-wrapper">
                    <p>
                      The project featured in many local newspapers.
                    </p>
                  </div>
                </div>
              </div>
              <div className="gallery-wrapper">
                <div className="gallery" style={galleryStyle(gallery3, 'center')}>
                  <div className="quote-wrapper">
                    <p>
                      Minutes after launch in Williamson Park, Lancaster.
                    </p>
                  </div>
                </div>
              </div>
              <div className="gallery-wrapper">
                <div className="gallery" style={galleryStyle(gallery4, 'center')}>
                  <div className="quote-wrapper">
                    <p>
                      View from 30mins above Hull.
                    </p>
                  </div>
                </div>
              </div>
          </div>
        </div>

      </div> 


    </div>
  )
}

export default TheLaunches

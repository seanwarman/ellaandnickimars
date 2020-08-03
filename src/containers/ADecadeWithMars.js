import React from 'react'
import Hero from '../components/Hero.js'
import Footer from '../components/Footer.js'
import Contact from '../components/Contact.js'

import backgroundDesktop from '../assets/pictures/decade-with-mars-hero.jpg'
import backgroundMobile from '../assets/pictures/mobile-decade-with-mars-hero.webp'
import icon1 from '../assets/pictures/icon-mountains-of-mars.webp'
import icon2 from '../assets/pictures/icon-a-decade-with-mars-dish.webp'
import image1 from '../assets/pictures/decade-with-mars-jumping.jpg'

function ADecadeWithMars() {
  return (
    <div>

      <Hero
        heading="A Decade With Mars"
        background={[backgroundMobile, backgroundDesktop]}
        style={{ backgroundPosition: 'center' }}
      ></Hero>


      <div id="a-decade-with-mars">
        <div className="container body-container">
          <div className="row">
            <div className="col-12 weak-center">
              <img
                className="head-icon"
                src={icon1}
                alt="mars-sketch"
              />
            </div>
            <div className="col-12 weak-center padder">
              <h2>About</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-12 padder">
              <p>
                In 2014 we first became interested in the idea of living on Mars. We heard about a company looking for applicants for a one way mission to leave Earth behind forever. We travelled around the UK meeting some of the applicants and filming interviews with them about why they wanted to become the first people to colonise the red planet. 
              </p>
              <div className="bg-image" style={{
                backgroundImage: `url(${image1})`,
                height: '400px',
                backgroundPosition: '0 20%'
              }}></div>
              <p>
                We decided we’d keep meeting the applicants for ten years - over the timeline of when the mission to Mars was meant to take place. The company has since folded and it doesn’t look likely they’ll be the first on Mars, but in the meantime a lot else has happened in the lives of the people we met. Some have moved abroad, changed jobs, completed PhDs, one has won 4 million on the lottery (really). 
              </p>
              <p>
                We think it’s interesting to keep documenting the lives of these people who aspired to be Martians - to see what changes on a local, personal level as well as globally with Mars missions and the world. At the end of our ten years we’ll make this into a full length film. 
              </p>
            </div>
          </div>
        </div>
        <div className="container-fluid red">
          <div className="container body-container">
            <div className="row">
              <div className="col-12 weak-center">
                <img
                  className="head-icon"
                  style={{
                    marginRight: '30px'
                  }}
                  src={icon2}
                  alt="mars-sketch"
                />
              </div>
              <div className="col-12 padder weak-center">

                <h2 className="white padder">Project Speech</h2>  

                <p className="white padder">
                  Here’s a short speech we made about the project in 2014 when we brought our group of applicants together, in a house in Bristol. 
                </p>
              </div>
              <div className="col-12 padder">
                <div style={{
                  padding: '56.25% 0 0 0',
                  position: 'relative'
                }}>
                  <iframe 
                    src="https://player.vimeo.com/video/107058516?color=d45d54&byline=0&portrait=0" 
                    style={{
                      position:'absolute',
                      top:'0',
                      left:'0',
                      width:'100%',
                      height:'100%',
                    }}
                    frameBorder="0" 
                    webkitallowfullscreen="true"
                    mozallowfullscreen="true"
                    allowFullScreen
                  >
                  </iframe>
                </div>
                <script src="https://player.vimeo.com/api/player.js"></script>
              </div>
            </div>
          </div>
        </div>

      </div>

      <Contact />

      <Footer />

    </div>
  )
}

export default ADecadeWithMars

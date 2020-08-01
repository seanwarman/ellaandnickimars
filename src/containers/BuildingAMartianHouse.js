import React from 'react'
import HeroPlx from '../components/HeroPlx.js'

import './BuildingAMartianHouse.css'

function BuildingAMartianHouse() {
  return (
    <div id="home" className="plx-page">

      <HeroPlx
        title="BUILDING A MARTIAN HOUSE"
      >
      </HeroPlx>

      <div className="container-fluid plx-fore about">
        <div className="body-container container">
          <div className="row">
            <div className="col-12 weak-center">

              {/*
                <iframe 
                  style={{border: '1px solid grey'}}
                  width="100%" 
                  height="624" 
                  // src="https://www.youtube.com/embed/RdXqpiPvvRo?rel=0&autoplay=1" 
                  frameborder="0" 
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                  allowfullscreen
                >
                </iframe>
              */}

            </div>
            <div className="col-12 weak-center padder">
              <h2>About</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-12 padder">
              <p className="pitch">
                We’re building a Martian House. It’s going to be a real life house that you can step into and imagine how we might live on another planet.
              </p>
              <p className="pitch padder">
                It’s often said we have more technology in our pockets nowadays than took NASA to the moon. This project is about seeing what is possible and how far we can get with what we have here and now.
              </p>
              <p className="pitch padder">
                Our house will be built by many people coming together and sharing their knowledge, skills and enthusiasm - working with space scientists, engineers, architects and the local community.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-5 col-12 weak-center padder middler">
              <img
              className="avatar"
              src="assets/pictures/avatar-ellaandnicki2.webp"
              alt="ella-and-nicki"
              />
            </div>
            <div className="col-md-7 col-12 padder">
              <p className="about">
                  Ella Good and Nicki Kent are artists based in 
                  Bristol, UK.      
              </p>
              <p className="about">
                  We make projects about the future that invite people 
                  to come and take part.
              </p>
              <p className="about">
                  In 2014 we started a ten year series about Mars, 
                  Earth and the future. We’re making lots of projects 
                  exploring different aspects of what going to Mars might 
                  make people think about - from imagining a whole new 
                  society to sustainable living here on Earth.
              </p>
              <p className="about">
                  Have a look around our website to see how you can get 
                  involved in our current project.
              </p>
            </div>
          </div>
        </div> 
      </div>
      
      {/*
        <!-- END section 1 -->
      */}
      <div className="container-fluid green plx-fore">
        <div className="container body-container">
          <div className="row">
            <div className="col-12 weak-center padder">
              <img src="assets/pictures/icon-satellite.webp" alt="satellite-icon" className="head-icon" />
            </div>
          </div>
          <div className="row">
            <div className="col-12 weak-center padder">
              <h2 className="white">Project Partners & Funders</h2>  
            </div>
          </div>
          <div className="row">
            <div className="col-sm-4 col-6 weak-center padder">
              <a href="https://www.youtube.com/watch?v=KBqZ76qlbnY" target="_blank" className="funder-link">
                <img src="assets/pictures/partners-lucy-berthoud.webp" alt="" className="spotlight-avatar" />
              </a>
              <h5>Lucy Berthoud</h5>
              <small>Professor of Space Engineering</small>
            </div>
            <div className="col-sm-4 col-6  weak-center padder">
              <a href="https://hbarchitects.co.uk/" target="_blank" className="funder-link">
                <img src="assets/pictures/partners-hugh-broughton.webp" alt="" className="spotlight-avatar" />
              </a>
              <h5>Hugh Broughton Architects</h5>
            </div>
            <div className="col-sm-4 col-12  weak-center padder middler">
              <a href="http://www.edtrust.org.uk/" target="_blank" className="funder-link">
                <div className="spotlight-avatar ed-marsh"></div>
              </a>
              <h5>The Edward Marshall Trust</h5>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6 col-6 weak-center padder nudge-right">
              <a href="https://www.guaana.com/funding/grants/mbrchallenge/details" target="_blank" className="funder-link">
                <img src="assets/pictures/partners-space-settlement-challenge.webp" alt="" className="spotlight-avatar" />
              </a>
              <h5>MBR Space Settlement Grant</h5>
              <small>This project recieved seed funding from the Dubai Future Foundation through 
                <a className="white" target="_blank" href="http://guaana.com">Guaana.com</a>
              </small>
            </div>
            <div className="col-sm-6 col-6 weak-center padder nudge-left">
              <a href="http://www.bristol.ac.uk/brigstow/" target="_blank" className="funder-link">
                <img src="assets/pictures/partners-brigstow.webp" alt="" className="spotlight-avatar" />
              </a>
              <h5>The Brigstow Institute <br /> University of Bristol</h5>
            </div>
          </div>
        </div>
      </div>
      <div className="press container-fluid plx-fore">
        <div className="container body-container">
          <div className="row">
            <div className="col-12 weak-center">
              <img
                className="head-icon"
                src="assets/pictures/icon-mountains-of-mars.webp" 
                alt="mars-house-sketch"
              />
            </div>
            <div className="col-12 weak-center padder">
              <h2>Recent Press Coverage</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-7 col-12 middler padder swap-2">
              <h6 className="big-quote">
                "We have already identified five key things to do, taking inspiration from research facilities such as Biosphere 2 and the Mars Desert Research Station in Utah, US."
              </h6>
            </div>
            <div className="col-md-5 col-12 middler padder swap-1">
              <a target="_blank" href="https://theconversation.com/five-things-you-need-to-do-to-build-a-home-on-mars-97742"><img className="card" src="assets/pictures/press-the-conversation.webp" alt="press" /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BuildingAMartianHouse

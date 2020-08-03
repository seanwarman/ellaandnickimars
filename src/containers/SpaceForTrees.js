import React from 'react'
import Hero from '../components/Hero.js'
import Footer from '../components/Footer.js'
import Contact from '../components/Contact.js'

import backgroundMobile from '../assets/pictures/mobile-space-for-trees-sign.webp'
import backgroundDesktop from '../assets/pictures/space-for-trees-sign.webp'

import image1 from '../assets/pictures/icon-tree4.webp'
import image2 from '../assets/pictures/space-for-trees-comparison-1.webp'
import image3 from '../assets/pictures/space-for-trees-comparison-2.webp'
import image4 from '../assets/pictures/icon-tree2.webp'
import image5 from '../assets/pictures/icon-tree3.webp'

import gallery1 from '../assets/pictures/space-for-trees-planting-sign.jpg'
import gallery2 from '../assets/pictures/space-for-trees-ella-nicki.webp'
import gallery3 from '../assets/pictures/space-for-trees-group.webp'
import gallery4 from '../assets/pictures/space-for-trees-nicki.jpg'

import './SpaceForTrees.css'

function galleryStyle(img, position) {
  return {
    backgroundImage: `url(${img})`,
    backgroundPosition: position
  }
}

function SpaceForTrees() {
  return (
    <div>

      <Hero
        heading="Space For Trees"
        background={[backgroundMobile, backgroundDesktop]}
      ></Hero>

      <div id="space-for-trees">


        <div className="container-fluid body-container">
          <div className="item-title weak-center">
            <img className="head-icon" src={image1} alt="mars-sketch3" />
          </div>
          <div className="item-title weak-center padder">
            <h2>About</h2>
          </div>
          <img className="item-1 padder" src={image2} alt="planting-trees-1" />
            <img className="item-2 padder" src={image3} alt="planting-trees-2" />
              <div className="item-3">
                <p>
                  In Winter 2016/17 we ran a project called Space For Trees.
                </p>
                <p>
                  Before Yuri Gagarin became the first human in space in 1961, 
                  he planted a tree at his launch site. Ever since, hundreds 
                  of astronauts from all over the world have followed his 
                  tradition and planted a tree in the same place before 
                  leaving planet Earth.
                </p>
              </div>
              <p className="item-4">
                Space For Trees replicated the tree planting ceremony with 
                schools and community groups around the UK, alongside 
                workshops about legacy, Earth and the future. When 
                astronauts return from space they often speak about how 
                profound and life changing the experience of seeing the 
                planet from a new perspective is. 
              </p>
            </div>

            <div className="container-fluid green">
              <div className="container body-container">
                <div className="row">
                  <div className="col-12 weak-center">
                    <img
                      className="head-icon"
                      src={image4}
                      alt="mars-sketch2"
                    /> 
                  <h2 className="white padder">The Space For Trees Film</h2>  
                </div>
              </div>
              <div className="row padder">
                <iframe
                  width="100%"
                  className="video"
                  src="https://www.youtube.com/embed/c5zaCuEHJog"
                  frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
                </iframe>
              </div>
            </div>
          </div>

          <div className="container body-container">
            <div className="row">
              <div className="col-12 weak-center">
                <img
                  className="head-icon"
                  src={image5}
                  alt="mars-sketch3"
                />
              </div>
            </div>
            <div className="row padder">
              <div className="gallery-wrapper">
                <div className="gallery" style={galleryStyle(gallery1, 'top')}>
                  <div className="quote-wrapper">
                    <p>
                      Planting a tree with the Explore and Create group at Middleton Leisure Center, Leeds.
                    </p>
                  </div>
                </div>
              </div>
              <div className="gallery-wrapper">
                <div className="gallery" style={galleryStyle(gallery2, 'top')}>
                  <div className="quote-wrapper">
                    <p>
                      All the trees were given comemorative plaques.
                    </p>
                  </div>
                </div>
              </div>
              <div className="gallery-wrapper">
                <div className="gallery" style={galleryStyle(gallery3, 'center')}>
                  <div className="quote-wrapper">
                    <p>
                      Planting a tree with the Friends of Silver Street Nature Reserve, Midsomer Norton.
                    </p>
                  </div>
                </div>
              </div>
              <div className="gallery-wrapper">
                <div className="gallery" style={galleryStyle(gallery4, 'center')}>
                  <div className="quote-wrapper">
                    <p>
                      Planting a tree with school children in Hull.
                    </p>
                  </div>
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

export default SpaceForTrees

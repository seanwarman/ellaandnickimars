import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'

import './Footer.css'

function Footer() {
  return (
    <div id="footer" className="container-fluid">
      <a target="_blank" href="https://twitter.com/ellaandnicki">
        <FontAwesomeIcon className="icon" icon={faTwitter} />
      </a>
      <a target="_blank" href="https://www.facebook.com/buildingamartianhouse">
        <FontAwesomeIcon className="icon" icon={faFacebook} />
      </a>
      <a target="_blank" href="https://www.instagram.com/ellaandnicki/">
        <FontAwesomeIcon className="icon" icon={faInstagram} />
      </a>
      <a target="_blank" href="https://www.youtube.com/channel/UCtcxLadKMYBc8YRAdE7_IUA">
        <FontAwesomeIcon className="icon" icon={faYoutube} />
      </a>
    </div>
  )
}

export default Footer

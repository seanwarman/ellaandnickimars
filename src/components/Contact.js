import React from 'react'
import Mailchimp from 'react-mailchimp-form'
import icon from '../assets/pictures/avatar-ellaandnicki.webp'
import './Contact.css'

function Contact() {
  return (

    <div id="contact" className="container-fluid contact plx-fore">
        <div className="container">
          <div className="row middler">
            <div className="col-12 weak-center padder middler">
              <img src={icon} alt="ellaandnicki" className="avatar" />
            </div>
            <div className="col-12 weak-center padder contact-wrapper">
              <h2>Contact Us</h2>
              <p>We like hearing from people.</p>
              <p><a href="mailto:ellaandnicki@gmail.com">ellaandnicki@gmail.com</a></p>

              <Mailchimp
                className="mc_embed_signup"
                action='https://ellaandnicki.us8.list-manage.com/subscribe/post?u=dcc5ac61143953ee475ef2177&amp;id=911ec2fd3e'
                fields={[
                  {
                    name: 'FNAME',
                    placeholder: 'First name',
                    type: 'text',
                  },
                  {
                    name: 'LNAME',
                    placeholder: 'Last name',
                    type: 'text',
                  },
                  {
                    name: 'EMAIL',
                    placeholder: 'Email',
                    type: 'emial',
                    required: true
                  }
                ]} 
                styles={{
                  sendingMsg: {
                    color: 'white'
                  },
                  successMsg: {
                    color: '#14B278'
                  },
                  duplicateMsg: {
                    color: 'white'
                  },
                  errorMsg: {
                    color: '#e24a4a'
                  }
                }}
                />

            </div>
          </div>
        </div>
      </div>
  )
}

export default Contact

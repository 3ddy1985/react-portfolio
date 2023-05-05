import React from 'react'
import { forwardRef } from 'react';
import './contact.scss'

import { BsLinkedin } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import { FaGithubSquare } from 'react-icons/fa';

const Contact = forwardRef((props, ref) => {
  return (
    <section ref={ref} id='contact'>
      <h2>D<span className='faulty-letter'>r</span>op Me <span className='faulty-letter'>a</span> <span className='faulty-letter'>L</span>ine</h2>
      <div className='container'>
        <div className='row'>
        <div className='contact-icons'>
          <a href='mailto:nick.langley@hotmail.com' className='contact-badge'><MdEmail /></a>
          <a href='https://github.com/3ddy1985' target='_blank' className='contact-badge'><FaGithubSquare /></a>
          <a href='https://www.linkedin.com/in/nick85/' target='_blank' className='contact-badge'><BsLinkedin /></a>
        </div>
        <form id='contact-form' class="contact-form" action="https://formspree.io/f/mqkoyvye" method='POST'>
          <div className="inputs">
            <label for='name' >Name</label>
            <input id='name' name='name' type="text" placeholder="John Smith" />
            <label for='email'>Email</label>
            <input id='email' name='email' type="email" placeholder="contact_me@hire.com" />
            <label for='message'>Message</label>
            <textarea id='message' name='message' rows='7' placeholder="Type away :)" />
            <button className='submit-btn' type="submit">Send</button>
          </div>
        </form>
        </div>
      </div>
    </section>
  )
})

export default Contact
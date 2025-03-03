import React from 'react';
import './contact.scss'

const Contact = () => {
  return (
    <section className='contact' id='contact'>
        <div className="container">
          <div className="contact-content">
            <h2>Contact</h2>
            <p>Don&apos;t be shy! If there are questions 👇</p>
            <form action="https://formsubmit.co/karimovahmadjon7788@gmail.com" method='POST' className='contact-form' >
              <input type="text" placeholder='Full name' name='name' required/>
              <input type="email" placeholder='Email' name='email' required/>
              <textarea name="message" id="message" placeholder='Enter text here...' required></textarea>
              <button type='submit'>Send Message</button>
            </form>
          </div>
        </div>
    </section>
  )
}

export default Contact;

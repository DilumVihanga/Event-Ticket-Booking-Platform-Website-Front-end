import React from 'react'
import './contact.css'

export default function ContactformComp() {
  return (
    <div>
        <div class="container" style={{padding:'0 200px 0 200px'}}>  
  <form id="contact" action="" method="post">
    <h3>Event Ticket.lk Contact Form</h3>
    <h4>Contact us for custom quote</h4>
    <fieldset>
      <div>
  <input placeholder="Your name" type="text" tabIndex={1} required autofocus />
  <fieldset>
    <input placeholder="Your Email Address" type="email" tabIndex={2} required />
  </fieldset>
  <fieldset>
    <input placeholder="Your Phone Number (optional)" type="tel" tabIndex={3} required />
  </fieldset>
  <fieldset>
    <input placeholder="Your Web Site (optional)" type="url" tabIndex={4} required />
  </fieldset></div>

    </fieldset>
    <fieldset>
      <textarea placeholder="Type your message here...." tabindex="5" required></textarea>
    </fieldset>
    <fieldset>
      <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Submit</button>
    </fieldset>
    
  </form>
</div>
    </div>
  )
}

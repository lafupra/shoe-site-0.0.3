import React from 'react'
import "./ContactUs.css"

const ContactUs = () => {
  return (
    <>
<section className="contact">
  <div className="contact-container">
    <div className="contact-info">
      <h2>Contact Us</h2>
      <p>We'd love to hear from you. Use the form below to send us a message.</p>
      <ul>
        <li><i className="fas fa-phone"></i> Phone: 9328154895</li>
        <li><i className="fas fa-envelope"></i> Email: cpraful968@gmail.com</li>
        <li><i className="fas fa-map-marker-alt"></i> Address: Ambedkar-Nagar St NO.14 Aji Gidc , 80 Feet Road,Rajkot</li>
      </ul>
    </div>
    <div className="contact-form">
      <h2>Send Us a Message</h2>
      <form>
        <div className="form-group">
          <label for="name">Name</label>
          <input type="text" id="name" name="name" required/>
        </div>
        <div className="form-group">
          <label for="email">Email</label>
          <input type="email" id="email" name="email" required/>
        </div>
        <div className="form-group">
          <label for="message">Message</label>
          <textarea id="message" name="message" required></textarea>
        </div>
        <button type="submit">Send</button>
      </form>
    </div>
  </div>
</section>

    </>
  )
}

export default ContactUs
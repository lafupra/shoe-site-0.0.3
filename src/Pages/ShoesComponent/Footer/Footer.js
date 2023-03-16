import React from 'react'
import "./Footer.css"
import {Link} from "react-router-dom"

const Footer = () => {

  const handleLinkClick = () => {
		window.scrollTo(0, 0);
	  };

    
  return (
<>

<footer>
  <div className="footer-container">
    <div className="row">
      <div className="col-md-8">
        <h3>About Us</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
      <div className="col-md-4">
       <Link to={"/services"} onClick={handleLinkClick}> <h3>Services</h3>
        <ul className="list-unstyled">
          <li>Shoe Repair</li>
          <li>Custom Shoes</li>
          <li>Shoe Cleaning</li>
          <li>Shoe Accessories</li>
        </ul>
        </Link>
      </div>
      <div className="col-md-4">
      <Link to={"/contactus"} onClick={handleLinkClick}><h3>Contact Us</h3>
        <ul className="list-unstyled contact-info">
          <li><i className="fa fa-phone"></i> 1-800-123-4567</li>
          <li><i className="fa fa-envelope"></i> support@shoes.com</li>
          <li><i className="fa fa-map-marker"></i> 123 Main Street, Anytown USA 12345</li>
        </ul>
        </Link>
      </div>
    </div>
    <hr/>
    <div className="rowc">
      <div className="col-md-6">
        <p>&copy; 2023 Shoes.com. All Rights Reserved.</p>
      </div>
      <div className="col-md-6">
        <ul className="list-inline text-right">
          <li>Privacy Policy</li>
          <li>Terms of Use</li>
          <li>FAQs</li>
        </ul>
      </div>
    </div>
  </div>
</footer>
</>
  )
}

export default Footer
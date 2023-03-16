import React from 'react'
import "./Services.css"

const Services = () => {
  return (
    <>
    <section className="services-section">
  <h2 className="section-title">Our Services</h2>
  <div className="services-container">
    <div className="service-card">
      <img src="shoe-repair.jpg" alt="Shoe Repair Service"/>
      <h3 className="service-title">Shoe Repair</h3>
      <p className="service-description">We offer professional shoe repair services to make sure your shoes last as long as possible.</p>
      <button className="service-button">Learn More</button>
    </div>
    <div className="service-card">
      <img src="shoe-cleaning.jpg" alt="Shoe Cleaning Service"/>
      <h3 className="service-title">Shoe Cleaning</h3>
      <p className="service-description">Our shoe cleaning service can help restore your shoes to their original condition and make them look as good as new.</p>
      <button className="service-button">Learn More</button>
    </div>
    <div className="service-card">
      <img src="shoe-stretching.jpg" alt="Shoe Stretching Service"/>
      <h3 className="service-title">Shoe Stretching</h3>
      <p className="service-description">Our shoe stretching service can help you get the perfect fit for your shoes, ensuring maximum comfort and support.</p>
      <button className="service-button">Learn More</button>
    </div>
  </div>
</section>
    </>
  )
}

export default Services
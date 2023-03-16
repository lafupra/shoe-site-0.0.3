import React from "react";
import Slider from "react-slick";
import "./CustomSlider"



const settings = {
  

  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,


};

function CustomSlide({ src, alt }) {
  return (
    <div>
      <img className = "slideimage" src={src} alt={alt} />
    </div>
  );
}

function CustomSlider({ slides }) {
  return (
    <Slider className="slider" {...settings}>
      {slides.map((slide, index) => (
        <CustomSlide src={slide.src} alt={slide.alt} key={index} />
      ))}
    </Slider>
  );
}

export default CustomSlider;
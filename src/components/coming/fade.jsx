import React, { useState } from "react";
import Slider from "react-slick";
import "./fadeslick.css";
import "./fadeslick-theme.css";

function Fade() {

  const [hideButtons, setHideButtons] = useState(false);
  const settings = {
    
    fade: true,
    infinite: true,
    autoplay: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false, 
    prevArrow: hideButtons ? null : <div className="slick-prev">Previous</div>,
    nextArrow: hideButtons ? null : <div className="slick-next">Next</div>,
  };
  return (
    <div className="slider-container">
      
      <Slider {...settings}>
        <div>
          Kaduna
        </div>
        <div>
         Kano
        </div>
        <div>
         Abuja
        </div>
        <div>
          Jos
        </div>
      </Slider>
    </div>
  );
}

export default Fade;

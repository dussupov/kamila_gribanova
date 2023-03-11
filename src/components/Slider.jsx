import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import logo from './SliderImg/IMG_1321_1.png'

export default function MySlider (){
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 10000,
      dotsClass: 'slick-dots',
      customPaging: function (i) {
        return (
          <div className='slider-dots' style={{ backgroundColor: 'white', width: '15px', height: '15px', borderRadius: '50%', margin: '0 5px' , border : "1px solid #7B58FF"}}>
          </div>
        );
      }
    };
    
    return (
      <Slider {...settings} style={{ outline: "none" }}>
        <div className='SliderItems'>
          <div className='SliderItems__img'>
            <img src={logo} alt="Slide 1" />
          </div>
          <div className="SliderItems__title">
            <span>foukané sklo</span>
          </div>
        </div>
        <div className='SliderItems'>
          <div className='SliderItems__img'>
            <img src={logo} alt="Slide 1" />
          </div>
          <div className="SliderItems__title">
            <span>foukané sklo</span>
          </div>
        </div>
        <div className='SliderItems'>
          <div className='SliderItems__img'>
            <img src={logo} alt="Slide 1" />
          </div>
          <div className="SliderItems__title">
            <span>foukané sklo</span>
          </div>
        </div>
        <div className='SliderItems'>
          <div className='SliderItems__img'>
            <img src={logo} alt="Slide 1" />
          </div>
          <div className="SliderItems__title">
            <span>foukané sklo</span>
          </div>
        </div>
      </Slider>
    );
  };
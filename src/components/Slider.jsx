import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function MySlider ({photos}){
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
    console.log(process.env.PUBLIC_URL );
    return (
      <Slider {...settings} style={{ outline: "none" }}>
        {photos.map(photo => (
          <div className='SliderItems'>
            <div className='SliderItems__img'>
              <img src={process.env.PUBLIC_URL + '/' + photo.src} alt={photo.alt} />
            </div>
            <div className="SliderItems__title">
              <span>{photo.title}</span>
            </div>
          </div>
        ))}
      </Slider>
    );
  };
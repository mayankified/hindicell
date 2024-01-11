import React from 'react'
import { Component } from "react";
import Slider from "react-slick";
import svnit from '../assets/svnit.png'
import { events } from '../Constants/index'
const Events = () => {


  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2800,

  };

  return (
    <div id='event' className='flex justify-center items-center w-full bg-[#fefeff] pt-12 '>

      <div className='bg-primary sm:w-[70%] w-[90%] rounded-lg p-4 flex flex-col  '>
        <h2 className='mx-auto font-poppins font-semibold text-[#FF522F] sm:text-[28px] text-[18px] mb-6'>राजभाषा प्रकोष्ठ द्वारा आयोजित कार्यक्रम</h2>
        <Slider {...settings} className='bg-[#ff8d2f] overflow-hidden rounded-lg caroo'>
          {
            events.map((eve) => (

              <div key={eve.id} className="[80vw] w-auto flex flex-col items-end justify-center">
                <img
                  src={eve.image}
                  className="w-full object-cover  sm:h-[500px] h-[300px] z-[100]"
                  alt=""
                />
                <h2 className="p-2 text-[#fefeff] text-center ">{eve.desc}</h2>
              </div>
            ))
          }

        </Slider>
      </div>
    </div>
  )
}

export default Events
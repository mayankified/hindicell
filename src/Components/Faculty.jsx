import React from 'react'
import { Component } from "react";
import Slider from "react-slick";
import wave2 from '../assets/wave2.svg'
import wave3 from '../assets/wave3.svg'
import { prof} from '../Constants/index.js'


const Faculty = () => {




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
    <div id='fac'>

      <img src={wave2} className='mb-10' alt="" />
      <div className='flex justify-center flex-col items-center w-full my-12'>

        <h2 className='mx-auto font-poppins font-semibold text-[#fefeff] text-[32px] sm:text-[42px]  mb-6'>प्राध्यापक समिति</h2>
        <div className='bg-primary sm:w-[70%] w-[80%] rounded-lg p-4 flex flex-col  '>
          <Slider {...settings} className='overflow-hidden rounded-lg '>
            {prof.map((ass) => 

              <div key={ass.id} className='flex flex-col px-2 py-4'>
                <div className='flex sm:flex-row flex-col items-center justify-center mb-6'>
                  <img src={ass.image} alt="" className='sm:w-[100px] w-[64px] h-[64px] sm:h-[100px] rounded-3xl' />
                  <div className='flex flex-col mx-4'>
                    <h2 className='sm:text-[40px] text-[23px]  '>{ass.name}</h2>
                    <p className='sm:text-[18px] text-[14px] '>{ass.position}</p>
                  </div>
                </div>
                <div className='flex flex-col items-center'>
                  <h2 className='sm:text-[30px] mb-4  text-[20px]'>Message</h2>
                  <p className='px-6 sm:text-[18px] text-[12px]'>{ass.word}</p>
                </div>
              </div>

            )}

          </Slider>
        </div>
      </div>
      {/* <img src={wave3} className='' alt="" /> */}

    </div>
  )
}

export default Faculty
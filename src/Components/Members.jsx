import React from 'react'
import { Component } from "react";
import Slider from "react-slick";
import wave3 from '../assets/wave3.svg'




const Members = ({ data, name }) => {


  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 2900,

  };

  return (
    <div id='member'>
      <div className='flex flex-col justify-center items-center w-full bg-kesri '>
        <div className=''>


          <h1 className='mx-auto font-poppins font-semibold text-[#fefeff] text-[32px] sm:text-[42px] mb-6 text-center'>छात्र समिति</h1>


          <div className='flex flex-col items-center'>



            <h2 className='text-[#ff7f2f] bg-[#ffffff] w-fit p-3 text-[23px] rounded-md my-6 font-semibold text-center'>{name}</h2>
            <div className='flex flex-wrap justify-center'>


              {
                data.map((mem) =>

                  <div key={mem.id} className='sm:w-[200px] w-[160px] flex flex-col bg-[#fefeff] items-center px-3 py-6 rounded-lg mx-4 my-6 ass'>
                    <img src={mem.image} className='sm:w-[100px] w-[64px] h-[64px] sm:h-[100px] rounded-lg object-cover' alt="" />
                    <h2 className='pt-4 sm:text-[18px] text-[16px] font-medium'>{mem.name}</h2>
                  </div>
                )
              }


            </div>
          </div>


        </div>

      </div>
      {/* <img src={wave3} className='pt-10 w-full' alt="" /> */}

    </div>

  )
}

export default Members
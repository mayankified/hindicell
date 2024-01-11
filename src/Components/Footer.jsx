import React from 'react'
import wave3 from '../assets/wave3.svg'
import { FaLinkedin, FaInstagramSquare, FaFacebookSquare } from "react-icons/fa";
import { IoSend } from "react-icons/io5";

const Footer = () => {
  return (
    <div id='contact' className='text-[#303030]'>
      <img src={wave3} className='pt-10 w-full' alt="" />


      <div className='bg-[#fefeff] w-full mb-0 flex sm:flex-row flex-col justify-center sm:items-start items-center'>

        <div className='sm:w-[25%] w-[80%] flex  sm:h-[140px] h-auto  flex-col items-center'>
          <h2 className='py-4'>महत्वपूर्ण लिंक</h2>
          <div className='flex flex-col'>
            <a className='text-[14px] text-kesri ' href="https://www.svnit.ac.in/">• सरदार वल्लभभाई राष्ट्रीय प्रौद्योगिकी   संस्थान, सूरत</a>
            <a className='text-[14px] text-kesri ' href="https://rajbhasha.nic.in/">• भारत सरकार राजभाषा विभाग</a>
            <a className='text-[14px] text-kesri ' href="https://rajbhasha.nic.in/hi/hindi-vocabulary">• हिंदी शब्दकोश</a>
          </div>
        </div>

        <div className='sm:w-[25%] w-[80%] flex  sm:flex-col flex-row  sm:h-[140px] h-auto  items-center sm:border-r-2 sm:border-l-2 border-0 px-2' >
          <h2 className='py-4 px-2'>संपर्क करें</h2>
          <div className='flex justify-center'>
            <input type="text" placeholder='आपका ईमेल' name="" id="" className='p-2 rounded-md outline-none border-[#ff522f] border-[1px] text-[#000] w-[160px]' />
            <button className='text-[30px] px-2 text-[#ff8032] hover:text-[#ff522f]' type='submit'><IoSend /></button>
          </div>
        </div>

        <div className='sm:w-[25%] w-[80%] flex  flex-col sm:h-[140px] h-auto items-center py-2'>
          <h2 className='py-4 font sm:block hidden'>सोशल मीडिया</h2>
          <div className='flex justify-center w-full'>
            <a className='text-[32px] text-[#ff8032] hover:text-[#ff522f] px-2 ' href="https://www.svnit.ac.in/"><FaInstagramSquare /></a>
            <a className='text-[32px] text-[#ff8032] hover:text-[#ff522f] px-2 ' href="https://rajbhasha.nic.in/"><FaFacebookSquare /></a>
            <a className='text-[32px] text-[#ff8032] hover:text-[#ff522f] px-2 ' href="https://rajbhasha.nic.in/hi/hindi-vocabulary"><FaLinkedin /></a>
          </div>
        </div>
      </div>


      <div className='bg-[#fefeff] w-full text-[#282828] flex justify-center items-center flex-col sm:flex-row py-6 pb-10'>
        <span className='px-4'>© Copyright 2023-2024</span>
        <span className='px-4 text-center text-[#646464] py-2'>राजभाषा प्रकोष्ठ ।  सरदार वल्लभभाई राष्ट्रीय प्रौद्योगिकी संस्थान, सूरत </span>
        <div className='flex px-4 '>
          <h2 className='font-normal' >सप्रेम से बनाया गया :</h2>
          <a href="" className='px-2 text-[#f87424] hover:text-[#c86737] rounded-md'>मयंक कश्यप</a>
        </div>
      </div>
    </div>
  )
}

export default Footer
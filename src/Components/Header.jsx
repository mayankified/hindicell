import React, { useState } from 'react'
import logoh from '../assets/logoh.png'
import { IoIosHome } from "react-icons/io";
import { RiMenu5Fill } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
import Hamburger from 'hamburger-react'

const Header = () => {
  const [Tog, setTog] = useState(false)
  return (<>
    <div className='sm:flex hidden flex-1 py-2 justify-center menulink1'>
      <a  className='px-2 font-poppins text-primary hover:text-orange-200 text-[16px]' href="#home"><IoIosHome className='inline w-[20px] h-auto' />    मुख्य पृष्ठ</a>
      <a className='px-2 font-poppins text-primary hover:text-orange-200 text-[16px]' href="#event">कार्यक्रम</a>
      <a className='px-2 font-poppins text-primary hover:text-orange-200 text-[16px]' href="#fac">प्राध्यापक समिति</a>
      <a className='px-2 font-poppins text-primary hover:text-orange-200 text-[16px]' href="#member">छात्र समिति</a>
      <a className='px-2 font-poppins text-primary hover:text-orange-200 text-[16px]' href="#contact">संपर्क</a>
    </div>
    <div className='flex justify-center flex-1 items-center bg-primary '>
      <img src={logoh} className='sm:w-[90px] w-[56px] h-auto m-2 object-contain' alt="" />
      <div className='flex flex-col text-[#FF522F] textk font-poppins pl-2  '>
        <h2 className='font-semibold sm:text-[40px] text-[26px]'>राजभाषा प्रकोष्ठ</h2>
        <p className='sm:text-[16px] text-[12px] text-kesri'>सरदार वल्लभभाई राष्ट्रीय प्रौद्योगिकी संस्थान, सूरत</p>
      </div>
      <div className='sm:hidden relative ' >

      <Hamburger color='#ff522f' size={26} toggled={Tog} toggle={setTog} />
      </div>
    </div>

    <div className={`min-w-[64px] bg-primary ${Tog ? 'absolute' : 'hidden'} h-fit right-3 flex-col rounded-xl top-[80px] sidebar z-50`}>
      <div className='flex flex-col items-start m-3'>

        <a className='px-3 py-1 font-poppins font-medium text-[#ff522f] text-[16px]' href="#home">मुख्य पृष्ठ</a>
        <a className='px-3 py-1 font-poppins font-medium text-[#ff522f] text-[16px]' href="#event">कार्यक्रम</a>
        <a className='px-3 py-1 font-poppins font-medium text-[#ff522f] text-[16px]' href="#member">प्राध्यापक समिति</a>
        <a className='px-3 py-1 font-poppins font-medium text-[#ff522f] text-[16px]' href="#fac">छात्र समिति</a>
        <a className='px-3 py-1 font-poppins font-medium text-[#ff522f]  text-[16px]' href="contact">संपर्क</a>
      </div>
    </div>
  </>
  )
}

export default Header
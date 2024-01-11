import React from 'react'
import reader from '../assets/reader.png'

const Magazine = () => {
  return (
    <div className='w-full bg-[#fefeff] sm:flex-row flex flex-col px-12 h-auto py-12 justify-center items-center'>
      <img src={reader} className='sm:w-[400px] w-[200px] object-contain h-auto' alt="" />
      <div className='flex flex-col px-6'>
        <h1 className='font-poppins font-semibold text-kesri sm:text-[36px] text-[27px] mb-6'>हमारी पत्रिका</h1>
        <p className='max-w-[470px] sm:text-[18px] text-[14px]'> राजभाषा प्रकोष्ठ द्वारा दो छ: मासिक पत्रिकाओं: <span className='text-kesri px-1 font-semibold'>ध्वनि</span>एवं <span className='text-kesri px-1 font-semibold'>सम्मुख</span>
           का भी प्रकाशन किया जाता है।</p>
        <a href="" className='bg-kesri p-2 w-fit text-white font-medium rounded-md mt-6 sm:text-[18px] text-[16px] hover:shadow-xl '>पत्रिका यहाँ पढ़ें</a>
      </div>

    </div>
  )
}

export default Magazine
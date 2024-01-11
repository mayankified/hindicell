import React from 'react'
import styles from '../Styles/styles'
import wave from '../assets/wave.svg'
import logoh from '../assets/svnit.png'
import logooh from '../assets/gate.jpeg'
import sardar from '../assets/sardar.png'

import '../Styles/App.css'
const Hero = () => {
  return (
    <div className={`flex flex-col items-center`}>

      <div className={`flex sm:flex-row flex-col sm:pt-[100px] pt-4 pb-[30px] w-[80%] h-auto  overflow-hidden hero justify-center items-center `}>


        <div className='md:w-[50%] w-[100%] p-6 z-10'>
          {/* <h1>namaskar</h1> */}
          <h2 className='font-poppins font-semibold text-white  sm:text-[32px] text-[23px] sm:leading-[46.8px] leading-relaxed sm:mb-6 mb-2'>राजभाषा प्रकोष्ठ के बारे में</h2>
          <p className='font-poppins font-normal text-dimWhite sm:text-[18px] text-[14px] sm:leading-[30.8px] leading-relaxed max-w-[470px]'> हम सुनिश्चित करते हैं कि संस्थान में कार्यालय के एवं अन्य कार्य द्विभाषा में हो। छात्र-छात्राओं एवं संस्थान से जुड़े लोगों के लिए सितंबर माह में हिंदी दिवस एवं जनवरी माह में विश्व हिंदी दिवस के उपलक्ष्य में हिंदी पखवाड़े का आयोजन किया जाता है। इसके अलावा समय-समय पर विविध रुचिपूर्ण कार्यक्रम व प्रतियोगिताएं आयोजित की जाती रहती हैं।
          </p>
        </div>
        <div className='overflow-hidden md:w-[50%] w-[80%] flex h-auto items-start justify-center'>
          <img src={sardar} alt="" className='object-cover blackfilter h-[500px]' />
        </div>
      </div>


      <div className={`flex sm:flex-row flex-col sm:pt-[100px] pt-4 pb-[100px] w-[80%] h-auto  overflow-hidden hero justify-center items-center `}>

        <div className='overflow-hidden md:w-[50%] w-[80%] flex h-auto items-start justify-center'>
          <img src={logoh} alt="" className='object-contain w-[90%] h-auto rounded-md' />
        </div>

        <div className='md:w-[50%] w-[100%] p-6 z-10'>
          <h2 className='font-poppins font-semibold text-white  sm:text-[32px] text-[23px] sm:leading-[46.8px] leading-relaxed sm:mb-6 mb-2'>स्थापना</h2>
          <p className='font-poppins font-normal text-dimWhite sm:text-[18px] text-[14px] sm:leading-[30.8px] leading-relaxed max-w-[470px]'>भाषा किसी भी राष्ट्र के चरित्र की कसौटी होती है। यदि भाषा जोरदार होगी तो उसे बोलने वाले लोग भी वैसे ही होंगे। हमारे संविधान के अनुच्छेद 343 द्वारा हिंदी को राजभाषा का दर्जा प्राप्त है। अतः राजभाषा के प्रचार प्रसार हेतु गृह मंत्रालय के निर्देश में बनाया गया राजभाषा प्रकोष्ठ हमारे संस्थान में हिंदी भाषा के सहज,सरल व सुगम प्रयोग पर बल देता है।
          </p>
        </div>
      </div>

      <img src={wave} alt="" className='w-full relative bottom-0' />
    </div >
  )
}

export default Hero
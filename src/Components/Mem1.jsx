import React, { useState } from 'react'
import { FaRegPlusSquare, FaRegMinusSquare } from "react-icons/fa";

const Mem1 = ({ data, name, tag }) => {

  const [Tog, setTog] = useState(false)

  function com(data){
    if(data.comm==='Webd'){
      return 'वेब अभिकल्प'
    }
    else if(data.comm==='Design'){
      return 'रचनात्मक '
    }
    else if(data.comm==='Publicity'){
      return 'प्रचारक'
    }
    else if(data.comm==='Content writing'){
      return 'लेखाकार'
    }
    else if(data.comm==='Infra'){
      return 'सृजनात्मक'
    }
    else if(data.comm==='Finance admin doc'){
      return 'वित्त एवम प्रलेखन'
    }
    else if(data.comm==='Management'){
      return 'प्रबंधक'
    }
    else if(data.comm==='Pr'){
      return ' जनसंपर्क'
    } 
    else if(data.comm==='Videography'){
      return 'वीडियोग्राफी'
    } 
    else if(data.comm===''){
      return null;
    } 

  }

  return (
    <div className='w-full flex justify-center items-center my-10'>

      <div  onClick={() => setTog((a) => !a)}  className='rounded-3xl cursor-pointer overflow-hidden bg-white w-[80%] ass '>
        <div className='flex p-4 justify-between'>
          <h2 className='textk text-[18px] w-full text-center font-semibold'>
            {name}
          </h2>
          <button className='text-[23px] px-1 text-[#6c6c6c] hover:text-[#313131]'>
            {Tog ? <FaRegMinusSquare /> : <FaRegPlusSquare />}
          </button>
        </div>
        <div className={`w-full ${Tog ? 'block' : 'hidden'} ease-linear`}>

          <div className='flex flex-wrap justify-center px-6'>


            {
              data.map((mem) =>

                <div key={mem.id} className='xs:w-[200px] w-[120px] flex flex-col bg-[#fefeff] items-center px-3 sm:py-6 sm:my-4 py-3 rounded-lg '>
                  <img src={mem.image} className='sm:w-[100px] w-[64px] sm:h-[100px] h-[64px] rounded-lg object-cover' alt="" />
                  <h2 className='pt-4 sm:text-[18px] text-[14px] font-medium'>{mem.name}</h2>
                  { com(mem) &&
                    <p className='text-kesri sm:text-[16px] text-[12px]'>{com(mem)}</p>
                  }
                </div>
              )
            }


          </div>

        </div>
      </div>
    </div>
  )
}

export default Mem1;
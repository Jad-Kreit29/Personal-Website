import React from 'react'
import headshot from '../images/headshot.jpg'

const Hero = () => {
  return (
    <div className='bg-amber-400 p-10'>

        <div className='flex justify-center'>

          <div className='grid grid-cols-2 items-center gap-15'>

            {/* Play around with the sizing here a bit more! */}
            <img className='object-cover object-[0%_70%] rounded-full h-70 sm:h-120 w-70 sm:w-120 border-8 border-white' src={headshot}/>

            <div>

              <h1 className='font-script text-[150px] text-white'>Jad Kreit</h1>
              <p className='text-white font-mono text-lg'>3rd Year SWE Student @ uOttawa</p>
              
            </div>

            
          </div>

        </div>

        <div>

          <h1 className='flex justify-center'>wow</h1>

        </div>

        <br></br>

    </div>
  )
}

export default Hero
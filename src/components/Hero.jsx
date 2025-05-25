import React from 'react'
import headshot from '../images/headshot.jpg'

const Hero = () => {
  return (
    <div className='bg-amber-400 p-10'>

        {/* Image and Main Text Container */}

        <div className='flex justify-center'>

          <div className='grid grid-cols-2 items-center gap-15'>

            {/* Play around with the sizing here a bit more! */}
            <img className='object-cover object-[0%_70%] rounded-full h-70 sm:h-120 w-70 sm:w-120 border-8 border-white shadow-2xl' src={headshot}/>

            <div>

              <h1 className='font-script text-[150px] text-white'>Jad Kreit</h1>
              <p className='text-gray-50 font-mono text-xl font-bold'>3rd Year SWE Student @ uOttawa &#x1F3DB;</p>
              
            </div>

          </div>

        </div>

        <br />

        {/* Scrolling Text Animation */}

        <div className='flex space-x-25 overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]'>

          {/* MAIN scroll */}

          <div className='animate-loop-scroll flex space-x-25 text-white text-3xl font-space-mono font-bold justify-between'>

            <h1>Developer &#x1F4BB;</h1>
            <h1>Designer &#x1F3A8;</h1>
            <h1>Gamer &#x1F3AE;</h1>
            <h1>Artist &#x1F9D1;&#x200D;&#x1F3A8;</h1>
            <h1>Leader &#x1F4CB;</h1>
            <h1>Photographer &#x1F4F8;</h1>

          </div>

          {/* Hidden Scroll */}

          <div className='animate-loop-scroll flex space-x-25 text-white text-3xl font-space-mono font-bold justify-between' aria-hidden='true'>

            <h1>Developer &#x1F4BB;</h1>
            <h1>Designer &#x1F3A8;</h1>
            <h1>Gamer &#x1F3AE;</h1>
            <h1>Artist &#x1F9D1;&#x200D;&#x1F3A8;</h1>
            <h1>Leader &#x1F4CB;</h1>
            <h1>Photographer &#x1F4F8;</h1>

          </div>

        </div>

        <br />

    </div>
  )
}

export default Hero
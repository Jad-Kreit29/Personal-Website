import React from 'react'
import headshot from '../images/headshot.jpg'

const Hero = () => {
  return (
    <div className='bg-amber-400 p-6'>

        <img className='object-cover object-[0%_70%] rounded-full h-100 w-100' src={headshot}/>

    </div>
  )
}

export default Hero
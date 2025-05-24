import React from 'react'
import Card from './Card'
import image1 from '../images/game-design.jpg'
import headshot from '../images/headshot.jpg'

const Description = () => {
  return (

    <div className='bg-[#01161E] px-10 py-5'>

      {/* About Me Section */}

      <div>

        <h1 className='font-script text-[150px] text-white'>ABOUT ME</h1>

        <p className='font-space-mono text-white'>Hello! My name is <b>Jad Kreit</b> and I love to program by having fun. </p>

      </div>

      {/* Projects/Test Cases Section */}

      <div>

        <h1 className='flex justify-end font-script text-[150px] text-white'>PROJECTS</h1>

        {/* Grids/Cards Section */}

        <div>

          <Card img={image1} bg={'bg-red-600'} title={'Title'} subtitle={'Subtitle'} />


        </div>


      </div>



    </div>

  )
}

export default Description
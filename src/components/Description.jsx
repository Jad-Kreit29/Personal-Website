import React from 'react'
import Card from './Card'
import repairImage from '../images/repair-shop.jpg'
import gameImage from '../images/game-design.jpg'
import shoppingImage from '../images/shopping.jpg'
import sportsImage from '../images/sports.jpg'

const Description = () => {
  return (

    <div className='bg-[#01161E] px-10 py-5'>

      {/* About Me Section */}

      <div>

        <h1 className='font-script text-[150px] text-white'>ABOUT ME</h1>

        {/* <p className='font-space-mono text-white'>Hello! My name is <b>Jad Kreit</b> and I love to program by having fun. </p> */}
        <p className='font-space-mono text-white'>Placeholder placeholder placeholder placeholder</p>

      </div>

      {/* Projects/Test Cases Section */}

      <div>

        <h1 className='flex justify-end font-script text-[150px] text-white'>PROJECTS</h1>

        {/* Grids/Cards Section */}

        <div className='grid grid-cols-3 gap-5 place-items-center-safe'>

          <Card img={repairImage} title={'Title'} subtitle={'Subtitle'} />

          <Card img={gameImage} title={'Title'} subtitle={'Subtitle'} />

          <Card img={shoppingImage} title={'Title'} subtitle={'Subtitle'} />

          <Card img={sportsImage} title={'Title'} subtitle={'Subtitle'} pos={'col-start-2'} />

        </div>


      </div>



    </div>

  )
}

export default Description
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

        <p className='font-space-mono text-white text-lg'>
          Hello! My name is <b>Jad Kreit</b>, and I am currently taking <b>Analysis and Design of User Interfaces (SEG 3125) at the University of Ottawa</b>, learning the principles of good user design.
          <br/><br/>
          I am a massive NERD &#x1F913; From being a gamer to a film creator, and sometimes a 3D artist, I love to express myself through many unique outlets.
          Most importantly, I LOVE solving puzzles. Why is that important? Because being a software developer is all about finding creative solutions to everyday problems!
          <br/><br/>
          I approach every challenge like a puzzle to be solved. Through my leadership skills in the <a className='font-bold underline underline-offset-1' href='https://www.instagram.com/uogamedev?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=='>uOttawa Game Development Club</a>, I value the importance of clear and effecient communcation, whilst making everyone feel welcome and comfortable.
          I believe that good design comes from the participation of every person, and I always seek to learning new skills and ideas with the support of the people around me.
        </p>

      </div>

      {/* Projects/Test Cases Section */}

      <div>

        <h1 className='flex justify-end font-script text-[150px] text-white'>PROJECTS</h1>

        {/* Grids/Cards Section */}

        <div className='grid grid-cols-3 gap-5 place-items-center-safe'>

          <Card img={repairImage} title={'Auto-Repair Shop Website'} subtitle={'A website designed for a local automobile repair shop.'} />

          <Card img={gameImage} title={'Webgame'} subtitle={'A 2D platformer created with basic web technologies.'} />

          <Card img={shoppingImage} title={'E-Commerce Website'} subtitle={'A modern e-commerce site powered with React JS.'} />

          <Card img={sportsImage} title={'Sports Website'} subtitle={'A sports analytics site created with Next JS to track scores of your favourite sports teams.'} pos={'col-start-2'} />

        </div>


      </div>



    </div>

  )
}

export default Description
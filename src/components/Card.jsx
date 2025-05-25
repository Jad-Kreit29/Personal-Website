import React from 'react'
import { Link } from 'react-router-dom'

const Cards = ({img, title, subtitle, pos }) => {
  return (

    // Entire Card

    <div className={`bg-[#124559] duration-200 ease-in hover:bg-[#185C77] max-w-md max-h-md rounded-lg overflow-hidden ${pos}`}>

        {/* Image*/}

        <img className='object-cover w-[600px] h-[200px]' src = {img} />

        {/* Description Holder */}

        <div className='px-6 py-4'>

          <h4 className='text-white font-semibold text-xl mb-3'>{title}</h4>
          <p className='text-gray-300 text-sm'>{subtitle}</p>

        </div>

        {/* View Button */}

        <div className='px-4 pb-4'>

          <button className='bg-amber-400 p-3 rounded-full text-sm text-black font-bold hover:bg-[#F0AD05] focus:outline-2 focus:outline-offset-2 focus:outline-[#F0AD05] active:bg-[#DC9F04]' type='button'>
            
            <Link to='/project'>

              Learn More
            
            </Link>
            
          </button>

        </div>

    </div>


  )
}

export default Cards
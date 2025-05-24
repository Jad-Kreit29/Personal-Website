import React from 'react'

const Cards = ({ bg, img, title, subtitle }) => {
  return (

    // Entire Card

    <div className='bg-white border rounded-lg overflow-hidden'>

        {/* Image*/}

        <img src = {img} />

        {/* Description Holder */}

        <div className='p-6'>

          <h4 className='font-semibold text-lg'>{title}</h4>
          <span>{subtitle}</span>


        </div>

        {/* View Button */}

        <div>

        </div>



    </div>


  )
}

export default Cards
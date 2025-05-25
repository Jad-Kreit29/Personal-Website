import React from 'react'
import { Link } from 'react-router-dom'
import { FaWrench, FaExclamationTriangle } from 'react-icons/fa'

const NotFoundPage = () => {
  return (

    <>

      <div className='flex h-screen justify-center items-center space-x-5'>

        <FaExclamationTriangle className='text-amber-400 text-7xl' />
        <h1 className='text-7xl text-[#01161E] font-extrabold underline underline-offset-4'>UNDER CONSUTRCTION!</h1>
        <FaWrench className='text-amber-400 text-7xl' />

      </div>
    
    </>

    

  )
}

export default NotFoundPage
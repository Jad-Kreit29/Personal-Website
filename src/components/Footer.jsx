import React from 'react'
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className='bg-amber-400 bottom-0 py-5'>

        <div className='flex justify-center items-center space-x-10 text-4xl'>

            <a target="_blank" rel="noopener noreferrer" href='https://github.com/Jad-Kreit29'>

                <FaGithub className='duration-200 ease-in-out hover:text-white' />

            </a>

            <a target="_blank" rel="noopener noreferrer" href='https://www.linkedin.com/in/jad-kreit/'>

                <FaLinkedin className='duration-200 ease-in-out hover:text-white' />

            </a>

            <a target="_blank" rel="noopener noreferrer" href='https://www.instagram.com/dijoo35/'>

                <FaInstagram className='duration-200 ease-in-out hover:text-white' />

            </a>


        </div>

    </footer>
  )
}

export default Footer
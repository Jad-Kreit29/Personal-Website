import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {

  // Allows for active selection of the page we are on!

  const linkClass = ({ isActive }) => isActive ? 'duration-100 ease-in-out bg-[#01161E] text-white font-bold hover:bg-[#124559] hover:text-white rounded-md px-3 py-2' : 'duration-100 ease-in-out text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2'

  return (

    <nav className='bg-[#634133] font-mono px-4 py-2 border-b-4 border-[#01161E] sticky top-0 z-1'>

        <div>
            <div className='flex space-x-10'>

                <NavLink to="/" className={linkClass}>Home</NavLink>

                <NavLink to="/service" className={linkClass}>Bike-Repair Site</NavLink>

                <NavLink to="/game" className={linkClass}>Memory Webgame</NavLink>

                <NavLink to="/ecommerce" className={linkClass}>E-Commerce Site</NavLink>

                <NavLink to="/dashboard" className={linkClass}>Dashboard Site</NavLink>

            </div>


        </div>
        
    </nav>

  )
}

export default NavBar
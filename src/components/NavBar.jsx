import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (

    <nav className='bg-amber-300 border-b-3 border-b-emerald-500'>

        <div>
            <div className='flex space-x-2'>

                <NavLink to="/">Home</NavLink>

                <NavLink to="/about">About</NavLink>

            </div>

        </div>

    </nav>

  )
}

export default NavBar
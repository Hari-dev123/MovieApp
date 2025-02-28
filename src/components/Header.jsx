import React from 'react'
import { NavLink } from 'react-router-dom'


const Header = () => {
   
  return (
    <div className='w-full fixed top-0 z-50 text-white cursor-pointer shadow-xl bg-[#39445a] text-center text-3xl py-4 first-letter:text-3xl first-letter:text-red-500' onClick={()=>window.scroll(0,0)}>
        <NavLink to='/'>MovieHub</NavLink>
    </div>
  )
}

export default Header




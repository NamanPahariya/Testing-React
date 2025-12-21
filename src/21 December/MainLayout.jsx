import React from 'react'
import { Link, NavLink, Outlet } from 'react-router'

const MainLayout = () => {
  return (
    <div>
      <nav>
        <ul className='flex gap-3 border-2 border-white p-1 rounded-md mb-3'>
            <li><NavLink to="/" className={({isActive})=> isActive? 'bg-amber-100 text-black':''} >Contact</NavLink></li>
            <li><NavLink to="/career" className={({isActive})=> isActive? 'bg-amber-100 text-black':''}>Career</NavLink></li>
            <li><NavLink to="/dashboard" className={({isActive})=> isActive? 'bg-amber-100 text-black':''}>Dashboard</NavLink></li>
        </ul>
      </nav>
      <Outlet/>
      <footer className='bg-orange-400 text-black text-2xl mt-2'>
        Footer
      </footer>
    </div>
  )
}

export default MainLayout

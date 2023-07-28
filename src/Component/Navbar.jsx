import React, { useState } from 'react'
import {AiOutlineMenu , AiOutlineClose}  from 'react-icons/ai'

export default function Navbar() {
    const [nav,setNav] =useState('false');

   const handelNav =()=>{
    setNav(!nav)
   }
  return (
    <div className='text-gray-200 flex items-center justify-between h-24 max-w-[1240px] mx-auto px-4  '>
        <h1 className=' w-full text-3xl font-bold text-orange-300' >Semi<span className ='  text-gray-200 text-lg'>Colon</span></h1>
        <ul className=' hidden md:flex'>
            <li className='p-4' >Home</li>
            <li className='p-4'>Company</li>
            <li className='p-4'>About</li>
            <li className='p-4'>Contact</li>
        </ul>

        <div onClick={handelNav} className='block md:hidden'>
            {!nav ?<AiOutlineClose size={20}/>:<AiOutlineMenu size={20}/>}
           
        </div>
        <div className={!nav ? 'fixed left-0 top-0 w-[60%] h-full border border-gray-500 bg-[#000300] ease-in-out duration-500':'fixed left-[-100%]'}>
        <h1 className=' w-full text-3xl text-bold  text-orange-400 m-4 ' >Semi<span className ='  text-gray-200 text-lg'>Colon</span></h1>
            <ul className='p-4 uppercase'>
            <li className='p-4 border-b border-orange-300' >Home</li>
            <li className='p-4 border-b border-orange-300'>Company</li>
            <li className='p-4 border-b border-orange-300'>About</li>
            <li className='p-4 border-b border-orange-300'>Contact</li>
            </ul>
        </div>


    </div>
  )
}

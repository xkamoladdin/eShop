import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Search } from 'lucide-react';

export default class index extends Component {
  render() {
    return (
      <div>
        <nav className='border-b border-black'>
          <div className='bg-black'>
            <div className='container relative py-[12px] flex items-center justify-end'>
                <p className='text-[14px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white'>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</p>
                <select name="" id="" className='bg-black text-white outline-none'>
                    <option value="">English</option>
                    <option value="">Russian</option>
                </select>
            </div>
          </div>
            <div className='container flex items-center justify-between pt-[40px] py-[16px]'>

            <NavLink className='text-[24px] font-bold' to={'/'}>Exclusive</NavLink>
            <ul className='flex gap-[48px]'>
                <NavLink to={'/'}>Home</NavLink>
                <NavLink to={'/contact'}>Contact</NavLink>
                <NavLink to={'/about'}>About</NavLink>
                <NavLink to={'/signup'}>Sign Up</NavLink>
            </ul>
            <div className='flex items-center py-[10px] px-[20px] text-[12px] w-[243px] bg-[#F5F5F5] justify-between'>
                <input type="text" placeholder='What are you looking for?' />
                <NavLink to='/'>
                  <Search />
                </NavLink>
            </div>
            </div>
        </nav>
      </div>
    )
  }
}

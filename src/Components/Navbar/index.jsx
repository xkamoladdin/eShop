import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class index extends Component {
  render() {
    return (
      <div>
        <nav className='container'>
            <div className='bg-black relative py-[12px]'>
                <p className='text-[14px] absolute left-[50%] text-white translate-[50%] -translate-[50%]'>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</p>
                <select name="" id="">
                    <option value="">English</option>
                    <option value="">Russian</option>
                </select>
            </div>
            <NavLink className='text-[24px] font-bold' to={'/'}>Exclusive</NavLink>
            <ul>
                <NavLink to={'/'}>Home</NavLink>
                <NavLink to={''}>Contact</NavLink>
                <NavLink to={''}>About</NavLink>
                <NavLink to={''}>Sign Up</NavLink>
            </ul>
            <div>
                <input type="text" placeholder='What are you looking for?' />
            </div>
        </nav>
      </div>
    )
  }
}

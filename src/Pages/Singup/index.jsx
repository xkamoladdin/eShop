import React, { Component } from 'react'
import login from '../../assets/Login.png'
import google from '../../assets/google.png'
import { NavLink } from 'react-router-dom'

export default class Login extends Component {
  render() {
    return (
      <div className='flex items-center gap-[149px] container'>
        <div className='mt-[60px] flex items-center gap-[149px] mb-[140px]'>
          <img className='max-w-[697px] w-full' src={login} alt="Login"/>

            <div>
          <form className='flex flex-col'>
            <h1 className='font-medium text-[34px] mb-[24px]'>Create an account</h1>
            <h3 className='text-[16px] font-400 mb-[48px]'>Enter your details below</h3>
            <input className='mb-[40px] border-b-2' type="text" placeholder='Name'/>
            <input className='mb-[40px] border-b-2' type="text" placeholder='Email or Phone Number'/>
            <input className='border-b-2' type="password" placeholder='Password'/>
            <div className='mt-[40px]'>
          <button className='bg-[#DB4444] text-white py-[15px] px-[40px] w-full rounded-[5px]'> Create Account</button>
          <button className=' flex  gap-[16px] bg-none text-[#DB4444] mt-[16px]  w-full border-4 py-[16px] px-[56px] rounded-[5px]'> <img src={google} alt="" />Sign up with Google</button>
           </div>
            <div className='flex gap-[16px] justify-center mt-[34px]'>
            <p>Already have account?</p>
            <NavLink to={'/login'} className="border-b-2 border-black">
              Login
            </NavLink>
            </div>
          </form>
            </div>
        </div>
      </div>
    )
  }
}

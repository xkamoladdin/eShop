import React, { Component } from 'react'
import login from '../../assets/Login.png'

export default class Login extends Component {
  render() {
    return (
      <div>
        <div className='flex items-center gap-[149px]'>
          <img src={login} alt="Login"/>

          <form className='flex flex-col'>
            <h1 className='font-medium text-[36px] mb-[24px]'>Log in to Exclusive</h1>
            <h3 className='text-[16px] font-400 mb-[48px]'>Enter your details below</h3>
            <input className='mb-[40px] border' type="text" placeholder='Email or Phone Number'/>
            <input type="password" placeholder='Password'/>
          </form>
        </div>
      </div>
    )
  }
}

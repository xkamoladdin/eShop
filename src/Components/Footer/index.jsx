import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import qrCode from '../../assets/qrcode.png';
import { Facebook, Twitter, Instagram, Linkedin, SendHorizontal } from 'lucide-react';

export default class index extends Component {
  render() {
    return (
      <div className='bg-black py-[80px]'>
        <div className='container flex justify-between text-[#FAFAFA]'>
            <div className='flex flex-col gap-[20px]'>
              <NavLink to={'/'} className='text-[20px] font-medium text-[#FAFAFA]'>Exclusive</NavLink>
                <p>Subscribe</p>
                <p>Get 10% off your first order</p>
                <div className='w-[217px] py-[12px] flex items-center justify-between px-[16px] border'>
                    <input type="text" className='bg-transparent' name="" id="" placeholder='Enter your email' />
                    <SendHorizontal className='text-white' />
                </div>
            </div>
            <ul className='flex flex-col gap-[20px]'>
              <NavLink to={'/'} className='text-[20px] font-medium text-[#FAFAFA]'>Support</NavLink>
              <li><NavLink to={'/'}>111 Bijoy sarani, Dhaka, <br />DH 1515, Bangladesh.</NavLink></li>
              <li><NavLink to={'/'}>exclusive@gmail.com</NavLink></li>
              <li><NavLink to={'/'}>+88015-88888-9999</NavLink></li>
            </ul>
            <ul className='flex flex-col gap-[20px]'>
              <NavLink to={'/'} className='text-[20px] font-medium text-[#FAFAFA]'>Account</NavLink>
              <li><NavLink to={'/'}>My Account</NavLink></li>
              <li><NavLink to={'/'}>Login / Register</NavLink></li>
              <li><NavLink to={'/'}>Cart</NavLink></li>
              <li><NavLink to={'/'}>Wishlist</NavLink></li>
              <li><NavLink to={'/'}>Shop</NavLink></li>
            </ul>
            <ul className='flex flex-col gap-[20px]'>
              <NavLink to={'/'} className='text-[20px] font-medium text-[#FAFAFA]'>Quick Link</NavLink>
              <li><NavLink to={'/'}>Privacy Policy</NavLink></li>
              <li><NavLink to={'/'}>Terms Of Use</NavLink></li>
              <li><NavLink to={'/'}>FAQ</NavLink></li>
              <li><NavLink to={'/'}>Contact</NavLink></li>
            </ul>
            <div className='flex flex-col gap-[20px]'>
              <NavLink to={'/'} className='text-[20px] font-medium text-[#FAFAFA]'>Download App</NavLink>
              <p>Save $3 with App New User Only</p>
              <img src={qrCode} alt="" />
              <span className='flex gap-[30px]'><Facebook /><Twitter /><Instagram /><Linkedin /></span>
            </div>
        </div>
      </div>
    )
  }
}

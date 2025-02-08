import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import qrcode from '../../assets/qrcode1.png';
import googlee from '../../assets/google1.png';
import appstore from '../../assets/appstore.png';
import { Facebook, Twitter, Instagram, Linkedin, SendHorizontal } from 'lucide-react';

export default class Footer extends Component {
  render() {
    return (
      <div className='bg-black py-10 px-4'>
        <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 text-[#FAFAFA] justify-between'>
          <div className='flex flex-col gap-4'>
            <NavLink to={'/'} className='text-lg font-medium'>Exclusive</NavLink>
            <p>Subscribe</p>
            <p>Get 10% off your first order</p>
            <div className='w-full max-w-xs py-3 flex items-center justify-between px-4 border border-white rounded-md'>
              <input type='text' className='bg-transparent outline-none w-full' placeholder='Enter your email' />
              <SendHorizontal className='text-white cursor-pointer' />
            </div>
          </div>
          <ul className='flex flex-col gap-4'>
            <NavLink to={'/'} className='text-lg font-medium'>Support</NavLink>
            <li><NavLink to={'/'}>111 Bijoy sarani, Dhaka, <br />DH 1515, Bangladesh.</NavLink></li>
            <li><NavLink to={'/'}>exclusive@gmail.com</NavLink></li>
            <li><NavLink to={'/'}>+88015-88888-9999</NavLink></li>
          </ul>
          <ul className='flex flex-col gap-4'>
            <NavLink to={'/'} className='text-lg font-medium'>Account</NavLink>
            <li><NavLink to={'/'}>My Account</NavLink></li>
            <li><NavLink to={'/'}>Login / Register</NavLink></li>
            <li><NavLink to={'/'}>Cart</NavLink></li>
            <li><NavLink to={'/'}>Wishlist</NavLink></li>
            <li><NavLink to={'/'}>Shop</NavLink></li>
          </ul>
          <ul className='flex flex-col gap-4'>
            <NavLink to={'/'} className='text-lg font-medium'>Quick Link</NavLink>
            <li><NavLink to={'/'}>Privacy Policy</NavLink></li>
            <li><NavLink to={'/'}>Terms Of Use</NavLink></li>
            <li><NavLink to={'/'}>FAQ</NavLink></li>
            <li><NavLink to={'/'}>Contact</NavLink></li>
          </ul>
          <div className='flex flex-col gap-4'>
            <NavLink to={'/'} className='text-lg font-medium'>Download App</NavLink>
            <p>Save $3 with App New User Only</p>
            <div className='flex items-center gap-4'>
              <img className='w-20' src={qrcode} alt='QR Code' />
              <div>
                <NavLink to={'/'}><img className='w-28' src={googlee} alt='Google Play' /></NavLink>
                <NavLink to={'/'}><img className='w-28 mt-2' src={appstore} alt='App Store' /></NavLink>
              </div>
            </div>
            <div className='flex gap-4 text-white'>
              <Facebook /><Twitter /><Instagram /><Linkedin />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
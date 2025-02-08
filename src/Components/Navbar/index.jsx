import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Search, Heart, ShoppingCart, User, Menu, X, UserCircle, Package, XCircle, Star, LogOut } from 'lucide-react';

export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDropOpen: false,
      isMenuOpen: false,
    };
  }

  enter = () => {
    this.setState({ isDropOpen: true });
  };

  leave = () => {
    this.setState({ isDropOpen: false });
  }
  menu = () => {
    this.setState(pre => ({ isMenuOpen: !pre.isMenuOpen }));
  };

  render() {
    return (
      <div>
        <nav className='border-b border-black top-0 left-0 w-full bg-white shadow-md z-50'>
          <div className='bg-black'>
            <div className='container relative py-[12px] flex items-center justify-end'>
              <p className='md:text-[14px] text-[10px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white'>
                Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
              </p>
              <select name="" id="" className='bg-black text-white outline-none'>
                <option value="">English</option>
                <option value="">Russian</option>
              </select>
            </div>
          </div>
          <div className='container flex items-center justify-between pt-[40px] py-[16px]'>
            <NavLink className='text-[24px] font-bold' to={'/'}>Exclusive</NavLink>
            <ul className={` gap-[48px] md:flex hidden`}>
              <NavLink to={'/'}>Home</NavLink>
              <NavLink to={'/contact'}>Contact</NavLink>
              <NavLink to={'/about'}>About</NavLink>
              <NavLink to={'/signup'}>Sign Up</NavLink>
            </ul>
            <div className='flex items-center gap-5'>
              <div className='hidden md:flex items-center relative'>
                <input
                  type="text"
                  className='px-4 py-2 w-[243px] bg-[#F5F5F5] text-[12px] rounded-4px outline-none'
                  placeholder='What are you looking for?'
                />
                <NavLink to='/' className='absolute left-[87%]'>
                  <Search />
                </NavLink>
              </div>
              <NavLink to="/wishlist">
                <Heart />
              </NavLink>
              <NavLink to='/cart'>
                <ShoppingCart />
              </NavLink>
              <div className='relative' onMouseEnter={this.enter}>
                <NavLink to='account'>
                  <User className='hover:bg-red-400 rounded-lg transition-all duration-200' />
                </NavLink>
                {this.state.isDropOpen && (
                  <ul className='absolute right-0 top-[100%] mt-2 bg-white/40 backdrop-blur-lg text-black shadow-xl rounded-lg w-[220px] z-10 p-2 border border-white/50' onMouseLeave={this.leave}>
                    <li className='px-4 py-3 flex items-center gap-3 hover:bg-white/50 rounded-md cursor-pointer transition-all'><UserCircle /> Manage My Account</li>
                    <li className='px-4 py-3 flex items-center gap-3 hover:bg-white/50 rounded-md cursor-pointer transition-all'><Package /> My Order</li>
                    <li className='px-4 py-3 flex items-center gap-3 hover:bg-white/50 rounded-md cursor-pointer transition-all'><XCircle /> My Cancellations</li>
                    <li className='px-4 py-3 flex items-center gap-3 hover:bg-white/50 rounded-md cursor-pointer transition-all'><Star /> My Reviews</li>
                    <li className='px-4 py-3 flex items-center gap-3 hover:bg-white/50 rounded-md cursor-pointer transition-all'><LogOut /> Logout</li>
                  </ul>
                )}
              </div>
            </div>
            <button onClick={this.menu} className="md:hidden">
              {this.state.isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
          <div className={`md:hidden ${this.state.isMenuOpen ? 'block' : 'hidden'}`}>
            <ul className='flex flex-col items-center gap-[24px] py-[16px]'>
            <div className='flex items-center relative'>
                <input
                  type="text"
                  className='px-4 py-2 w-[243px] bg-[#F5F5F5] text-[12px] rounded-4px outline-none'
                  placeholder='What are you looking for?'
                />
                <NavLink to='/' className='absolute left-[87%]'>
                  <Search />
                </NavLink>
              </div>
              <NavLink to={'/'} onClick={this.menu}>Home</NavLink>
              <NavLink to={'/contact'} onClick={this.menu}>Contact</NavLink>
              <NavLink to={'/about'} onClick={this.menu}>About</NavLink>
              <NavLink to={'/signup'} onClick={this.menu}>Sign Up</NavLink>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
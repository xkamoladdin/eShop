import React, { Component } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { NavLink } from 'react-router-dom';
import { ChevronRight, ArrowRight } from 'lucide-react';
import Apple from'../../assets/apple.png'
import carousel from '../../JS/header';

export default class index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: carousel,
    }
  }
  render() {
    return (
      <div className='container mt-[40px] flex justify-between mb-[140px]'>
        <div className='border-r pr-[16px] mr-[45px]'>
            <ul className='flex flex-col gap-[30px]'>
                <li>
                    <NavLink to={'/'} className='flex items-center w-[217px] justify-between'>Woman’s Fashion<ChevronRight /></NavLink>
                </li>
                <li>
                    <NavLink to={'/'} className='flex items-center w-[217px] justify-between'>Men’s Fashion<ChevronRight /></NavLink>
                </li>
                <li>
                    <NavLink to={'/'}>Electronics</NavLink>
                </li>
                <li>
                    <NavLink to={'/'}>Home & Lifestyle</NavLink>
                </li>
                <li>
                    <NavLink to={'/'}>Medicine</NavLink>
                </li>
                <li>
                    <NavLink to={'/'}>Sports & Outdoor</NavLink>
                </li>
                <li>
                    <NavLink to={'/'}>Baby’s & Toys</NavLink>
                </li>
                <li>
                    <NavLink to={'/'}>Groceries & Pets</NavLink>
                </li>
                <li>
                    <NavLink to={'/'}>Health & Beauty</NavLink>
                </li>
            </ul>
        </div>


       

             
        <Swiper spaceBetween={10} slidesPerView={1} className='max-w-[892px] w-full'>
          {this.state.data.map(({ id, model, text, img }) => (
            <SwiperSlide key={id}>
              <div className='flex justify-between p-[64px] items-center bg-black'>
                <div>
                  <span className='flex items-center gap-[24px]'>
                    <img src={Apple} alt="Apple Logo" />
                    <h3 className='text-white'>{model}</h3>
                  </span>
                  <h2 className='text-[45px] mt-[20px] mb-[27px] font-semibold text-white'>
                    {text}
                  </h2>
                  <div className='flex text-white items-center gap-2'>
                    <NavLink to='/' className='font-medium border-b-2 border-white text-white'>
                      Shop Now
                    </NavLink>
                    <ArrowRight />
                  </div>
                </div>
                <img src={img} alt="iPhone" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
             
             
      </div>
    )
  }
}



import React, { Component } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { NavLink } from 'react-router-dom';
import SwiperImg from'../../assets/swiper.png'

export default class index extends Component {
  render() {
    return (
      <div className='container mt-[40px] flex justify-between mb-[140px]'>
        <div className='border-r pr-5'>
            <ul className='flex flex-col gap-[16px]'>
                <li>
                    <NavLink to={'/'}>Woman’s Fashion</NavLink>
                </li>
                <li>
                    <NavLink to={'/'}>Men’s Fashion</NavLink>
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
        <Swiper
      spaceBetween={10}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      className='max-w-[892px] w-full'
    >
      <SwiperSlide className='border'><img src={SwiperImg} alt="" /></SwiperSlide>
      <SwiperSlide className='border'><img src={SwiperImg} alt="" /></SwiperSlide>
      <SwiperSlide className='border'><img src={SwiperImg} alt="" /></SwiperSlide>
      <SwiperSlide className='border'><img src={SwiperImg} alt="" /></SwiperSlide>
    </Swiper>
      </div>
    )
  }
}

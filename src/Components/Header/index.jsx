import React, { Component } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { NavLink } from 'react-router-dom';
import { ChevronRight, ArrowRight } from 'lucide-react';
import iPhone from'../../assets/iPhone.png'
import Apple from'../../assets/apple.png'

export default class index extends Component {
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
        <Swiper
      spaceBetween={10}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      className='max-w-[892px] w-full'
    >
      <SwiperSlide className=''>
        <div className='flex justify-between p-[64px] items-center bg-black'>
          <div>
            <span className='flex items-center gap-[24px]'>
              <img src={Apple} alt="" />
              <h3 className='text-white'>iPhone 14 Series</h3>
            </span>
            <h2 className='text-[45px] mt-[20px] mb-[27px] font-semibold text-white'>Up to 10% off Voucher</h2>
            <div className='flex text-white items-center gap-2'>
              <NavLink to='/' className='font-medium border-b-2 border-white text-white'>Shop Now</NavLink>
              <ArrowRight />
            </div>
          </div>
          <img src={iPhone} alt="" />
        </div>
      </SwiperSlide>
      <SwiperSlide className=''>
        <div className='flex justify-between p-[64px] items-center bg-black'>
          <div>
            <span className='flex items-center gap-[24px]'>
              <img src={Apple} alt="" />
              <h3 className='text-white'>iPhone 15 Series</h3>
            </span>
            <h2 className='text-[45px] mt-[20px] mb-[27px] font-semibold text-white'>Up to 10% off Voucher</h2>
            <div className='flex text-white items-center gap-2'>
              <NavLink to='/' className='font-medium border-b-2 border-white text-white'>Shop Now</NavLink>
              <ArrowRight />
            </div>
          </div>
          <img src={iPhone} alt="" />
        </div>
      </SwiperSlide>
      <SwiperSlide className=''>
        <div className='flex justify-between p-[64px] items-center bg-black'>
          <div>
            <span className='flex items-center gap-[24px]'>
              <img src={Apple} alt="" />
              <h3 className='text-white'>iPhone 16 Series</h3>
            </span>
            <h2 className='text-[45px] mt-[20px] mb-[27px] font-semibold text-white'>Up to 10% off Voucher</h2>
            <div className='flex text-white items-center gap-2'>
              <NavLink to='/' className='font-medium border-b-2 border-white text-white'>Shop Now</NavLink>
              <ArrowRight />
            </div>
          </div>
          <img src={iPhone} alt="" />
        </div>
      </SwiperSlide>
      <SwiperSlide className=''>
        <div className='flex justify-between p-[64px] items-center bg-black'>
          <div>
            <span className='flex items-center gap-[24px]'>
              <img src={Apple} alt="" />
              <h3 className='text-white'>iPhone 13 Series</h3>
            </span>
            <h2 className='text-[45px] mt-[20px] mb-[27px] font-semibold text-white'>Up to 10% off Voucher</h2>
            <div className='flex text-white items-center gap-2'>
              <NavLink to='/' className='font-medium border-b-2 border-white text-white'>Shop Now</NavLink>
              <ArrowRight />
            </div>
          </div>
          <img src={iPhone} alt="" />
        </div>
      </SwiperSlide>
      <SwiperSlide className=''>
        <div className='flex justify-between p-[64px] items-center bg-black'>
          <div>
            <span className='flex items-center gap-[24px]'>
              <img src={Apple} alt="" />
              <h3 className='text-white'>iPhone 12 Series</h3>
            </span>
            <h2 className='text-[45px] mt-[20px] mb-[27px] font-semibold text-white'>Up to 10% off Voucher</h2>
            <div className='flex text-white items-center gap-2'>
              <NavLink to='/' className='font-medium border-b-2 border-white text-white'>Shop Now</NavLink>
              <ArrowRight />
            </div>
          </div>
          <img src={iPhone} alt="" />
        </div>
      </SwiperSlide>
      <SwiperSlide className=''>
        <div className='flex justify-between p-[64px] items-center bg-black'>
          <div>
            <span className='flex items-center gap-[24px]'>
              <img src={Apple} alt="" />
              <h3 className='text-white'>iPhone 11 Series</h3>
            </span>
            <h2 className='text-[45px] mt-[20px] mb-[27px] font-semibold text-white'>Up to 10% off Voucher</h2>
            <div className='flex text-white items-center gap-2'>
              <NavLink to='/' className='font-medium border-b-2 border-white text-white'>Shop Now</NavLink>
              <ArrowRight />
            </div>
          </div>
          <img src={iPhone} alt="" />
        </div>
      </SwiperSlide>
    </Swiper>
      </div>
    )
  }
}

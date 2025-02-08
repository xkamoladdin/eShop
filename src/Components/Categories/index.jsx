import React, { Component } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Smartphone, Laptop, Watch, Camera, Headphones, Gamepad } from 'lucide-react';

export default class index extends Component {
  render() {
    return (
      <div className='container'>
          <h2 className="font-semibold text-[#DB4444] mb-[30px] flex gap-[16px] items-center text-[13px] md:text-[16px]">
            <span className="w-[20px] h-[40px] bg-[#DB4444] rounded"></span>
            Categories
          </h2>
          <h2 className='md:text-[36px] text-[20px] font-semibold'>Browse By Category</h2>
          <Swiper
          spaceBetween={30}
          slidesPerView={6}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          className="w-full mb-[70px]"
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 10 },
            480: { slidesPerView: 2, spaceBetween: 15 },
            768: { slidesPerView: 4, spaceBetween: 20 },
            1024: { slidesPerView: 6, spaceBetween: 25 },
          }}
        >
            <SwiperSlide className="w-[170px] border p-[24px]">
                <div className='text-center h-[145px] flex justify-center items-center flex-col'>
                    <Smartphone size={60} />
                    <h3 className='mt-[20px]'>Phones</h3>
                </div>
            </SwiperSlide>
            <SwiperSlide className="w-[170px] border p-[24px]">
                <div className='text-center h-[145px] flex justify-center items-center flex-col'>
                    <Laptop size={60} />
                    <h3 className='mt-[20px]'>Computers</h3>
                </div>
            </SwiperSlide>
            <SwiperSlide className="w-[170px] border p-[24px]">
                <div className='text-center h-[145px] flex justify-center items-center flex-col'>
                    <Watch size={60} />
                    <h3 className='mt-[20px]'>SmartWatch</h3>
                </div>
            </SwiperSlide>
            <SwiperSlide className="w-[170px] border p-[24px]">
                <div className='text-center h-[145px] flex justify-center items-center flex-col'>
                    <Camera size={60} />
                    <h3 className='mt-[20px]'>Camera</h3>
                </div>
            </SwiperSlide>
            <SwiperSlide className="w-[170px] border p-[24px]">
                <div className='text-center h-[145px] flex justify-center items-center flex-col'>
                    <Headphones size={60} />
                    <h3 className='mt-[20px]'>HeadPhones</h3>
                </div>
            </SwiperSlide>
            <SwiperSlide className="w-[170px] border p-[24px]">
                <div className='text-center h-[145px] flex justify-center items-center flex-col'>
                    <Gamepad size={60} />
                    <h3 className='mt-[20px]'>Gaming</h3>
                </div>
            </SwiperSlide>
            <SwiperSlide className="w-[170px] border p-[24px]">
                <div className='text-center h-[145px] flex justify-center items-center flex-col'>
                    <Smartphone size={60} />
                    <h3 className='mt-[20px]'>Phones</h3>
                </div>
            </SwiperSlide>
        </Swiper>
        <hr className='mb-[70px]' />
      </div>
    )
  }
}

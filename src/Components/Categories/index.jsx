import React, { Component } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Smartphone } from 'lucide-react';

export default class index extends Component {
  render() {
    return (
      <div className='container'>
          <h2 className="font-semibold text-[#DB4444] mb-[30px] flex gap-[16px] items-center">
            <span className="w-[20px] h-[40px] bg-[#DB4444] rounded"></span>
            Categories
          </h2>
          <h2 className='text-[36px] font-semibold mb-[60px]'>Browse By Category</h2>
          <Swiper
          spaceBetween={30}
          slidesPerView={4}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          className="w-full mb-[70px]"
        >
            <SwiperSlide className="w-[170px] border p-[24px]">
                <div className='text-center h-[145px] flex justify-center items-center flex-col'>
                    <Smartphone size={60} />
                    <h3 className='mt-[20px]'>Phones</h3>
                </div>
            </SwiperSlide>
            <SwiperSlide className="w-[170px] border p-[24px]">
                <div className='text-center h-[145px] flex justify-center items-center flex-col'>
                    <Smartphone size={60} />
                    <h3 className='mt-[20px]'>Phones</h3>
                </div>
            </SwiperSlide>
            <SwiperSlide className="w-[170px] border p-[24px]">
                <div className='text-center h-[145px] flex justify-center items-center flex-col'>
                    <Smartphone size={60} />
                    <h3 className='mt-[20px]'>Phones</h3>
                </div>
            </SwiperSlide>
            <SwiperSlide className="w-[170px] border p-[24px]">
                <div className='text-center h-[145px] flex justify-center items-center flex-col'>
                    <Smartphone size={60} />
                    <h3 className='mt-[20px]'>Phones</h3>
                </div>
            </SwiperSlide>
            <SwiperSlide className="w-[170px] border p-[24px]">
                <div className='text-center h-[145px] flex justify-center items-center flex-col'>
                    <Smartphone size={60} />
                    <h3 className='mt-[20px]'>Phones</h3>
                </div>
            </SwiperSlide>
            <SwiperSlide className="w-[170px] border p-[24px]">
                <div className='text-center h-[145px] flex justify-center items-center flex-col'>
                    <Smartphone size={60} />
                    <h3 className='mt-[20px]'>Phones</h3>
                </div>
            </SwiperSlide>
            <SwiperSlide className="w-[170px] border p-[24px]">
                <div className='text-center h-[145px] flex justify-center items-center flex-col'>
                    <Smartphone size={60} />
                    <h3 className='mt-[20px]'>Phones</h3>
                </div>
            </SwiperSlide>
            <SwiperSlide className="w-[170px] border p-[24px]">
                <div className='text-center h-[145px] flex justify-center items-center flex-col'>
                    <Smartphone size={60} />
                    <h3 className='mt-[20px]'>Phones</h3>
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

import React, { Component } from 'react'
import ps1 from '../../assets/ps1.png'
import ps2 from '../../assets/ps2.png'
import ps3 from '../../assets/ps3.png'
import ps4 from '../../assets/ps4.png'
import ps5 from '../../assets/bigPs.png'
import { Star } from 'lucide-react';
import { Truck } from 'lucide-react';
import { RefreshCcw } from 'lucide-react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Game1 from'../../assets/game-card1.png'
import Game2 from'../../assets/game-card2.png'
import Game3 from'../../assets/game-card3.png'
import Game4 from'../../assets/game-card4.png'
import { Heart, Eye } from 'lucide-react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


export default class index extends Component {
  render() {
    return (
      <div className='container pt-[181px] pb-[140px]'>
        <div className='flex items-center gap-[71px]'>
        <div className="flex items-center gap-[30px]">
          <div>
            <img className='rounded px-[25px] py-[12px] bg-[#F5F5F5] w-[170px] h-[138px]' src={ps1} alt="" />
            <img className='rounded px-[25px] py-[12px] bg-[#F5F5F5] w-[170px] h-[138px] mt-[16px]' src={ps2} alt="" />
            <img className='rounded px-[25px] py-[12px] bg-[#F5F5F5] w-[170px] h-[138px] mt-[16px]' src={ps3} alt="" />
            <img className='rounded px-[25px] py-[12px] bg-[#F5F5F5] w-[170px] h-[138px] mt-[16px]' src={ps4} alt="" />
          </div>
          <span>
            <img className='pt-[154px] pb-[131px] px-[27px] bg-[#F5F5F5]' src={ps5} alt="" />
          </span>
        </div>
          <div>
          <h1 className='text-[24px] font-semibold'>Havic HV G-92 Gamepad</h1>
          <span className='flex mt-[16px] mb-[17px] items-center'>
          <span className='flex mr-[8px]'>
          <Star className='text-[#FFAD33]'/>
          <Star className='text-[#FFAD33]'/>
          <Star className='text-[#FFAD33]'/>
          <Star className='text-[#FFAD33]'/>
          <Star className='text-[#535353]'/>
          </span>
          <p className='text-[14px] font-normal text-[#5c5b5b] border-r-2 pr-[16px] border-[#494949]'>(150 Reviews)</p>
          <p className='text-[14px] font-normal text-[#00FF66] pl-[16px]'>In Stock</p>
          </span>
          <h3 className='text-[24px] font-normal mb-[24px]'>$192.00</h3>
          <p className='max-w-[373px] w-full text-[14px] font-normal border-b-2 border-[#494949] pb-[24px]'>PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.</p>

          <div className='flex mt-[24px]'>
          <h3 className='mr-[24px] '>Colours:</h3>
          <button className='bg-[#A0BCE0] w-5 h-5 rounded-full mr-[8px] hover:border-2 border-black'></button>
          <button className='bg-[#E07575] w-5 h-5 rounded-full hover:border-2 border-black'></button>
          </div>
          <div className='flex items-center gap-[16px] mt-[24px]'>
          <h3>Size:</h3>
          <button className='flex items-center justify-center border-2 border-[#494949] rounded hover:text-white hover:bg-[#DB4444] hover:border-none duration-100 w-8 h-8'>XS</button>
          <button className='flex items-center justify-center border-2 border-[#494949] rounded hover:text-white hover:bg-[#DB4444] hover:border-none duration-100 w-8 h-8'>S</button>
          <button className='flex items-center justify-center border-2 border-[#494949] rounded hover:text-white hover:bg-[#DB4444] hover:border-none duration-100 w-8 h-8'>M</button>
          <button className='flex items-center justify-center border-2 border-[#494949] rounded hover:text-white hover:bg-[#DB4444] hover:border-none duration-100 w-8 h-8'>L</button>
          <button className='flex items-center justify-center border-2 border-[#494949] rounded hover:text-white hover:bg-[#DB4444] hover:border-none duration-100 w-8 h-8'>XL</button>
          </div>


          <div className='mt-[24px] flex items-center gap-[16px] mb-[40px]'>
        <span className='flex items-center w-[157px] rounded border-2 border-[#494949]'>
        <button className='flex justify-center items-center text-[30px] w-[40px] h-[44px] hover:bg-[#DB4444] hover:text-white hover:rounded border-r-2 border-[#494949] hover:border-none'>-</button>
        <p className='px-[34px] py-2'>1</p>
        <button className='flex justify-center items-center text-[30px] w-[40px] h-[44px] hover:bg-[#DB4444] hover:text-white hover:rounded border-l-2 border-[#494949] hover:border-none'>+</button>
        </span>

        <button className='inline-block font-medium text-[#FAFAFA] bg-[#DB4444] py-[10px] px-[38px] rounded border-[#DB4444] border duration-300 hover:bg-transparent hover:text-[#DB4444]'>Buy Now</button>
        <span className='px-[9px] py-[10px] border-2 border-[#494949] rounded'><Heart /></span>
          </div>

          <div className='border-2 border-[#494949] px-[16px] py-[29px] rounded'>
          <div className='flex items-center gap-[16px]'>
            <Truck className='w-[40px] h-[40px]'/>
            <span>
              <h4 className='font-medium text-[16px] mb-[8px]'>Free Delivery</h4>
              <p className='font-medium text-[12px] border-b-2 border-[#494949]'>Enter your postal code for Delivery Availability</p>
            </span>
          </div>

          <div className='flex items-center gap-[16px] mt-[32px] border-t-2 pt-[16px] border-[#494949]'>
            <RefreshCcw className='w-[40px] h-[40px]'/>
            <span>
              <h4 className='font-medium text-[16px] mb-[8px]'>Return Delivery</h4>
              <p className='font-medium text-[12px]'>Free 30 Days Delivery Returns. Details</p>
            </span>
          </div>
          </div>
          </div>
        </div>




        <div className='mt-[140px]'>
        <div className='mb-[60px]'>
          <h2 className="font-semibold text-[#DB4444] mb-[23px] flex gap-[16px] items-center">
            <span className="w-[20px] h-[40px] bg-[#DB4444] rounded"></span>
            Related Item
          </h2>
        </div>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={30}
          slidesPerView={4}
          navigation
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
          className="w-full mb-[60px]"
        >
            <SwiperSlide className="w-[270px]">
                <div className="w-full h-[250px] bg-[#F5F5F5] flex justify-center items-center relative">
                    <span className="text-[12px] text-[#FAFAFA] px-[12px] py-[4px] bg-[#DB4444] rounded absolute top-[12px] left-[12px]">-40%</span>
                    <span className="flex gap-[8px] flex-col absolute right-[12px] top-[12px]"><p className="bg-white w-[34px] h-[34px] rounded-full flex items-center justify-center"><Heart /></p><p className="bg-white w-[34px] h-[34px] rounded-full flex items-center justify-center"><Eye /></p></span>
                    <img src={Game1} alt="" />
                </div>
                <h2 className="font-medium mt-[16px] mb-[8px]">HAVIT HV-G92 Gamepad</h2>
                <span className="flex gap-[12px] mb-[8px]"><p className="font-medium text-[#DB4444]">$120</p><del className="font-medium">$160</del></span>
                <div className="">⭐⭐⭐⭐⭐ (88)</div>
            </SwiperSlide>
            <SwiperSlide className="w-[270px]">
                <div className="w-full h-[250px] bg-[#F5F5F5] flex justify-center items-center relative">
                    <span className="text-[12px] text-[#FAFAFA] px-[12px] py-[4px] bg-[#DB4444] rounded absolute top-[12px] left-[12px]">-35%</span>
                    <span className="flex gap-[8px] flex-col absolute right-[12px] top-[12px]"><p className="bg-white w-[34px] h-[34px] rounded-full flex items-center justify-center"><Heart /></p><p className="bg-white w-[34px] h-[34px] rounded-full flex items-center justify-center"><Eye /></p></span>
                    <img src={Game2} alt="" />
                </div>
                <h2 className="font-medium mt-[16px] mb-[8px]">AK-900 Wired Keyboard</h2>
                <span className="flex gap-[12px] mb-[8px]"><p className="font-medium text-[#DB4444]">$960</p><del className="font-medium">$1160</del></span>
                <div className="">⭐⭐⭐⭐⭐ (75)</div>
            </SwiperSlide>
            <SwiperSlide className="w-[270px]">
                <div className="w-full h-[250px] bg-[#F5F5F5] flex justify-center items-center relative">
                    <span className="text-[12px] text-[#FAFAFA] px-[12px] py-[4px] bg-[#DB4444] rounded absolute top-[12px] left-[12px]">-30%</span>
                    <span className="flex gap-[8px] flex-col absolute right-[12px] top-[12px]"><p className="bg-white w-[34px] h-[34px] rounded-full flex items-center justify-center"><Heart /></p><p className="bg-white w-[34px] h-[34px] rounded-full flex items-center justify-center"><Eye /></p></span>
                    <img src={Game3} alt="" />
                </div>
                <h2 className="font-medium mt-[16px] mb-[8px]">IPS LCD Gaming Monitor</h2>
                <span className="flex gap-[12px] mb-[8px]"><p className="font-medium text-[#DB4444]">$370</p><del className="font-medium">$400</del></span>
                <div className="">⭐⭐⭐⭐⭐ (99)</div>
            </SwiperSlide>
            <SwiperSlide className="w-[270px]">
                <div className="w-full h-[250px] bg-[#F5F5F5] flex justify-center items-center relative">
                    <span className="text-[12px] text-[#FAFAFA] px-[12px] py-[4px] bg-[#DB4444] rounded absolute top-[12px] left-[12px]">-25%</span>
                    <span className="flex gap-[8px] flex-col absolute right-[12px] top-[12px]"><p className="bg-white w-[34px] h-[34px] rounded-full flex items-center justify-center"><Heart /></p><p className="bg-white w-[34px] h-[34px] rounded-full flex items-center justify-center"><Eye /></p></span>
                    <img src={Game4} alt="" />
                </div>
                <h2 className="font-medium mt-[16px] mb-[8px]">S-Series Comfort Chair</h2>
                <span className="flex gap-[12px] mb-[8px]"><p className="font-medium text-[#DB4444]">$375</p><del className="font-medium">$400</del></span>
                <div className="">⭐⭐⭐⭐⭐ (88)</div>
            </SwiperSlide>
            <SwiperSlide className="w-[270px]">
                <div className="w-full h-[250px] bg-[#F5F5F5] flex justify-center items-center relative">
                    <span className="text-[12px] text-[#FAFAFA] px-[12px] py-[4px] bg-[#DB4444] rounded absolute top-[12px] left-[12px]">-40%</span>
                    <span className="flex gap-[8px] flex-col absolute right-[12px] top-[12px]"><p className="bg-white w-[34px] h-[34px] rounded-full flex items-center justify-center"><Heart /></p><p className="bg-white w-[34px] h-[34px] rounded-full flex items-center justify-center"><Eye /></p></span>
                    <img src={Game1} alt="" />
                </div>
                <h2 className="font-medium mt-[16px] mb-[8px]">HAVIT HV-G92 Gamepad</h2>
                <span className="flex gap-[12px] mb-[8px]"><p className="font-medium text-[#DB4444]">$120</p><del className="font-medium">$160</del></span>
                <div className="">⭐⭐⭐⭐⭐ (88)</div>
            </SwiperSlide>
            <SwiperSlide className="w-[270px]">
                <div className="w-full h-[250px] bg-[#F5F5F5] flex justify-center items-center relative">
                    <span className="text-[12px] text-[#FAFAFA] px-[12px] py-[4px] bg-[#DB4444] rounded absolute top-[12px] left-[12px]">-40%</span>
                    <span className="flex gap-[8px] flex-col absolute right-[12px] top-[12px]"><p className="bg-white w-[34px] h-[34px] rounded-full flex items-center justify-center"><Heart /></p><p className="bg-white w-[34px] h-[34px] rounded-full flex items-center justify-center"><Eye /></p></span>
                    <img src={Game1} alt="" />
                </div>
                <h2 className="font-medium mt-[16px] mb-[8px]">HAVIT HV-G92 Gamepad</h2>
                <span className="flex gap-[12px] mb-[8px]"><p className="font-medium text-[#DB4444]">$120</p><del className="font-medium">$160</del></span>
                <div className="">⭐⭐⭐⭐⭐ (88)</div>
            </SwiperSlide>
        </Swiper>
        </div>

      </div>
    )
  }
}

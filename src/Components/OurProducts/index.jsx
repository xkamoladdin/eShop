import React, { Component } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Heart, Eye } from 'lucide-react';
import ProCard1 from'../../assets/procard1.png'
import ProCard2 from'../../assets/procard2.png'
import ProCard3 from'../../assets/procard3.png'
import ProCard4 from'../../assets/procard4.png'
import ProCard5 from'../../assets/procard5.png'
import ProCard6 from'../../assets/procard6.png'
import ProCard7 from'../../assets/procard7.png'
import ProCard8 from'../../assets/procard8.png'
import { NavLink } from "react-router-dom";


export default class index extends Component {
  render() {
    return (
      <div className='container mt-[71px]'>
        <div>
          <h2 className="font-semibold text-[#DB4444] mb-[23px] flex gap-[16px] items-center">
            <span className="w-[20px] h-[40px] bg-[#DB4444] rounded"></span>
            Our Products
          </h2>
          <div className="flex justify-between mb-[60px]">
            <h1 className="text-[36px] font-semibold">Explore Our Products</h1>
          </div>
        </div>



        <Swiper
          spaceBetween={30}
          slidesPerView={4}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          className="w-full mb-[60px]"
        >
            <SwiperSlide className="w-[270px]">
                <div className="w-full h-[250px] bg-[#F5F5F5] flex justify-center items-center relative">
                    <span className="flex gap-[8px] flex-col absolute right-[12px] top-[12px]"><p className="bg-white w-[34px] h-[34px] rounded-full flex items-center justify-center"><Heart /></p><p className="bg-white w-[34px] h-[34px] rounded-full flex items-center justify-center"><Eye /></p></span>
                    <img src={ProCard1} alt="" />
                </div>
                <h2 className="font-medium mt-[16px] mb-[8px]">Breed Dry Dog Food</h2>
                <span className="flex gap-[12px] mb-[8px]"><p className="font-medium text-[#DB4444]">$100</p><div className="">⭐⭐⭐⭐⭐ (65)</div></span>
            </SwiperSlide>
            <SwiperSlide className="w-[270px]">
                <div className="w-full h-[250px] bg-[#F5F5F5] flex justify-center items-center relative">
                    <span className="flex gap-[8px] flex-col absolute right-[12px] top-[12px]"><p className="bg-white w-[34px] h-[34px] rounded-full flex items-center justify-center"><Heart /></p><p className="bg-white w-[34px] h-[34px] rounded-full flex items-center justify-center"><Eye /></p></span>
                    <img src={ProCard2} alt="" />
                </div>
                <h2 className="font-medium mt-[16px] mb-[8px]">CANON EOS DSLR Camera</h2>
                <span className="flex gap-[12px] mb-[8px]"><p className="font-medium text-[#DB4444]">$360</p><div className="">⭐⭐⭐⭐⭐ (65)</div></span>
            </SwiperSlide>
            <SwiperSlide className="w-[270px]">
                <div className="w-full h-[250px] bg-[#F5F5F5] flex justify-center items-center relative">
                    <span className="flex gap-[8px] flex-col absolute right-[12px] top-[12px]"><p className="bg-white w-[34px] h-[34px] rounded-full flex items-center justify-center"><Heart /></p><p className="bg-white w-[34px] h-[34px] rounded-full flex items-center justify-center"><Eye /></p></span>
                    <img src={ProCard3} alt="" />
                </div>
                <h2 className="font-medium mt-[16px] mb-[8px]">ASUS FHD Gaming Laptop</h2>
                <span className="flex gap-[12px] mb-[8px]"><p className="font-medium text-[#DB4444]">$700</p><div className="">⭐⭐⭐⭐⭐ (65)</div></span>
            </SwiperSlide>
            <SwiperSlide className="w-[270px]">
                <div className="w-full h-[250px] bg-[#F5F5F5] flex justify-center items-center relative">
                    <span className="flex gap-[8px] flex-col absolute right-[12px] top-[12px]"><p className="bg-white w-[34px] h-[34px] rounded-full flex items-center justify-center"><Heart /></p><p className="bg-white w-[34px] h-[34px] rounded-full flex items-center justify-center"><Eye /></p></span>
                    <img src={ProCard4} alt="" />
                </div>
                <h2 className="font-medium mt-[16px] mb-[8px]">Curology Product Set </h2>
                <span className="flex gap-[12px] mb-[8px]"><p className="font-medium text-[#DB4444]">$500</p><div className="">⭐⭐⭐⭐⭐ (88)</div></span>
            </SwiperSlide>
            <SwiperSlide className="w-[270px]">
                <div className="w-full h-[250px] bg-[#F5F5F5] flex justify-center items-center relative">
                    <span className="flex gap-[8px] flex-col absolute right-[12px] top-[12px]"><p className="bg-white w-[34px] h-[34px] rounded-full flex items-center justify-center"><Heart /></p><p className="bg-white w-[34px] h-[34px] rounded-full flex items-center justify-center"><Eye /></p></span>
                    <img src={ProCard5} alt="" />
                </div>
                <h2 className="font-medium mt-[16px] mb-[8px]">HAVIT HV-G92 Gamepad</h2>
                <span className="flex gap-[12px] mb-[8px]"><p className="font-medium text-[#DB4444]">$120</p><div className="">⭐⭐⭐⭐⭐ (88)</div></span>
            </SwiperSlide>
            <SwiperSlide className="w-[270px]">
                <div className="w-full h-[250px] bg-[#F5F5F5] flex justify-center items-center relative">
                    <span className="flex gap-[8px] flex-col absolute right-[12px] top-[12px]"><p className="bg-white w-[34px] h-[34px] rounded-full flex items-center justify-center"><Heart /></p><p className="bg-white w-[34px] h-[34px] rounded-full flex items-center justify-center"><Eye /></p></span>
                    <img src={ProCard6} alt="" />
                </div>
                <h2 className="font-medium mt-[16px] mb-[8px]">HAVIT HV-G92 Gamepad</h2>
                <span className="flex gap-[12px] mb-[8px]"><p className="font-medium text-[#DB4444]">$120</p><div className="">⭐⭐⭐⭐⭐ (88)</div></span>
            </SwiperSlide>
        </Swiper>

        <Swiper
          spaceBetween={30}
          slidesPerView={4}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          className="w-full mb-[60px]"
        >
            <SwiperSlide className="w-[270px]">
                <div className="w-full h-[250px] bg-[#F5F5F5] flex justify-center items-center relative">
                    <span className="text-[12px] text-[#FAFAFA] px-[12px] py-[4px] bg-[#00FF66] rounded absolute top-[12px] left-[12px]">NEW</span>
                    <span className="flex gap-[8px] flex-col absolute right-[12px] top-[12px]"><p className="bg-white w-[34px] h-[34px] rounded-full flex items-center justify-center"><Heart /></p><p className="bg-white w-[34px] h-[34px] rounded-full flex items-center justify-center"><Eye /></p></span>
                    <img src={ProCard5} alt="" />
                </div>
                <h2 className="font-medium mt-[16px] mb-[8px]">Kids Electric Car</h2>
                <span className="flex gap-[12px] mb-[8px]"><p className="font-medium text-[#DB4444]">$960</p><div className="">⭐⭐⭐⭐⭐ (65)</div></span>
            </SwiperSlide>
            <SwiperSlide className="w-[270px]">
                <div className="w-full h-[250px] bg-[#F5F5F5] flex justify-center items-center relative">
                    <span className="flex gap-[8px] flex-col absolute right-[12px] top-[12px]"><p className="bg-white w-[34px] h-[34px] rounded-full flex items-center justify-center"><Heart /></p><p className="bg-white w-[34px] h-[34px] rounded-full flex items-center justify-center"><Eye /></p></span>
                    <img src={ProCard6} alt="" />
                </div>
                <h2 className="font-medium mt-[16px] mb-[8px]">Jr. Zoom Soccer Cleats</h2>
                <span className="flex gap-[12px] mb-[8px]"><p className="font-medium text-[#DB4444]">$1160</p><div className="">⭐⭐⭐⭐⭐ (65)</div></span>
            </SwiperSlide>
            <SwiperSlide className="w-[270px]">
                <div className="w-full h-[250px] bg-[#F5F5F5] flex justify-center items-center relative">
                    <span className="text-[12px] text-[#FAFAFA] px-[12px] py-[4px] bg-[#00FF66] rounded absolute top-[12px] left-[12px]">NEW</span>
                    <span className="flex gap-[8px] flex-col absolute right-[12px] top-[12px]"><p className="bg-white w-[34px] h-[34px] rounded-full flex items-center justify-center"><Heart /></p><p className="bg-white w-[34px] h-[34px] rounded-full flex items-center justify-center"><Eye /></p></span>
                    <img src={ProCard7} alt="" />
                </div>
                <h2 className="font-medium mt-[16px] mb-[8px]">GP11 Shooter USB Gamepad</h2>
                <span className="flex gap-[12px] mb-[8px]"><p className="font-medium text-[#DB4444]">$660</p><div className="">⭐⭐⭐⭐⭐ (65)</div></span>
            </SwiperSlide>
            <SwiperSlide className="w-[270px]">
                <div className="w-full h-[250px] bg-[#F5F5F5] flex justify-center items-center relative">
                    <span className="flex gap-[8px] flex-col absolute right-[12px] top-[12px]"><p className="bg-white w-[34px] h-[34px] rounded-full flex items-center justify-center"><Heart /></p><p className="bg-white w-[34px] h-[34px] rounded-full flex items-center justify-center"><Eye /></p></span>
                    <img src={ProCard8} alt="" />
                </div>
                <h2 className="font-medium mt-[16px] mb-[8px]">Quilted Satin Jacket</h2>
                <span className="flex gap-[12px] mb-[8px]"><p className="font-medium text-[#DB4444]">$660</p><div className="">⭐⭐⭐⭐⭐ (88)</div></span>
            </SwiperSlide>
            <SwiperSlide className="w-[270px]">
                <div className="w-full h-[250px] bg-[#F5F5F5] flex justify-center items-center relative">
                    <span className="flex gap-[8px] flex-col absolute right-[12px] top-[12px]"><p className="bg-white w-[34px] h-[34px] rounded-full flex items-center justify-center"><Heart /></p><p className="bg-white w-[34px] h-[34px] rounded-full flex items-center justify-center"><Eye /></p></span>
                    <img src={ProCard1} alt="" />
                </div>
                <h2 className="font-medium mt-[16px] mb-[8px]">HAVIT HV-G92 Gamepad</h2>
                <span className="flex gap-[12px] mb-[8px]"><p className="font-medium text-[#DB4444]">$120</p><div className="">⭐⭐⭐⭐⭐ (88)</div></span>
            </SwiperSlide>
            <SwiperSlide className="w-[270px]">
                <div className="w-full h-[250px] bg-[#F5F5F5] flex justify-center items-center relative">
                    <span className="flex gap-[8px] flex-col absolute right-[12px] top-[12px]"><p className="bg-white w-[34px] h-[34px] rounded-full flex items-center justify-center"><Heart /></p><p className="bg-white w-[34px] h-[34px] rounded-full flex items-center justify-center"><Eye /></p></span>
                    <img src={ProCard1} alt="" />
                </div>
                <h2 className="font-medium mt-[16px] mb-[8px]">HAVIT HV-G92 Gamepad</h2>
                <span className="flex gap-[12px] mb-[8px]"><p className="font-medium text-[#DB4444]">$120</p><div className="">⭐⭐⭐⭐⭐ (88)</div></span>
            </SwiperSlide>
        </Swiper>
        <div className="flex justify-center mb-[60px]">
            <NavLink to='/allproduct' className='inline-block font-medium text-[#FAFAFA] bg-[#DB4444] py-[16px] px-[48px] rounded border-[#DB4444] border duration-300 hover:bg-transparent hover:text-[#DB4444]'>View All Products</NavLink>
        </div>

      </div>
    )
  }
}

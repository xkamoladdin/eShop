import React, { Component } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Game1 from'../../assets/game-card1.png'
import { NavLink } from "react-router-dom";
import { Heart, Eye } from 'lucide-react';
import Month1 from'../../assets/month-card1.png'
import Month2 from'../../assets/month-card2.png'
import Month3 from'../../assets/month-card3.png'
import Month4 from'../../assets/month-card4.png'



export default class Index extends Component {
  

  render() {
    return (
      <div className="container w-full">
        <div>
          <h2 className="font-semibold text-[#DB4444] mb-[23px] flex gap-[16px] items-center">
            <span className="w-[20px] h-[40px] bg-[#DB4444] rounded"></span>
            This Month
          </h2>
          <div className="flex justify-between mb-[60px]">
            <h1 className="text-[36px] font-semibold">Best Selling Products</h1>
            <div className="flex justify-center">
                <NavLink to='/allproduct' className='inline-block font-medium text-[#FAFAFA] bg-[#DB4444] py-[16px] px-[48px] rounded border-[#DB4444] border duration-300 hover:bg-transparent hover:text-[#DB4444]'>View All</NavLink>
            </div>
          </div>
        </div>
        <Swiper
          spaceBetween={30}
          slidesPerView={4}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          className="w-full mb-[140px]"
        >
            <SwiperSlide className="w-[270px]">
                <div className="w-full h-[250px] bg-[#F5F5F5] flex justify-center items-center relative">
                    <span className="flex gap-[8px] flex-col absolute right-[12px] top-[12px]"><p className="bg-white w-[34px] h-[34px] rounded-full flex items-center justify-center"><Heart /></p><p className="bg-white w-[34px] h-[34px] rounded-full flex items-center justify-center"><Eye /></p></span>
                    <img src={Month1} alt="" />
                </div>
                <h2 className="font-medium mt-[16px] mb-[8px]">The north coat</h2>
                <span className="flex gap-[12px] mb-[8px]"><p className="font-medium text-[#DB4444]">$260</p><del className="font-medium">$360</del></span>
                <div className="">⭐⭐⭐⭐⭐ (65)</div>
            </SwiperSlide>
            <SwiperSlide className="w-[270px]">
                <div className="w-full h-[250px] bg-[#F5F5F5] flex justify-center items-center relative">
                    <span className="flex gap-[8px] flex-col absolute right-[12px] top-[12px]"><p className="bg-white w-[34px] h-[34px] rounded-full flex items-center justify-center"><Heart /></p><p className="bg-white w-[34px] h-[34px] rounded-full flex items-center justify-center"><Eye /></p></span>
                    <img src={Month2} alt="" />
                </div>
                <h2 className="font-medium mt-[16px] mb-[8px]">Gucci duffle bag</h2>
                <span className="flex gap-[12px] mb-[8px]"><p className="font-medium text-[#DB4444]">$960</p><del className="font-medium">$1160</del></span>
                <div className="">⭐⭐⭐⭐⭐ (65)</div>
            </SwiperSlide>
            <SwiperSlide className="w-[270px]">
                <div className="w-full h-[250px] bg-[#F5F5F5] flex justify-center items-center relative">
                    <span className="flex gap-[8px] flex-col absolute right-[12px] top-[12px]"><p className="bg-white w-[34px] h-[34px] rounded-full flex items-center justify-center"><Heart /></p><p className="bg-white w-[34px] h-[34px] rounded-full flex items-center justify-center"><Eye /></p></span>
                    <img src={Month3} alt="" />
                </div>
                <h2 className="font-medium mt-[16px] mb-[8px]">RGB liquid CPU Cooler</h2>
                <span className="flex gap-[12px] mb-[8px]"><p className="font-medium text-[#DB4444]">$160</p><del className="font-medium">$170</del></span>
                <div className="">⭐⭐⭐⭐⭐ (65)</div>
            </SwiperSlide>
            <SwiperSlide className="w-[270px]">
                <div className="w-full h-[250px] bg-[#F5F5F5] flex justify-center items-center relative">
                    <span className="flex gap-[8px] flex-col absolute right-[12px] top-[12px]"><p className="bg-white w-[34px] h-[34px] rounded-full flex items-center justify-center"><Heart /></p><p className="bg-white w-[34px] h-[34px] rounded-full flex items-center justify-center"><Eye /></p></span>
                    <img src={Month4} alt="" />
                </div>
                <h2 className="font-medium mt-[16px] mb-[8px]">Small BookSelf</h2>
                <span className="flex gap-[12px] mb-[8px]"><p className="font-medium text-[#DB4444]">$360</p><del className="font-medium"></del></span>
                <div className="">⭐⭐⭐⭐⭐ (88)</div>
            </SwiperSlide>
            <SwiperSlide className="w-[270px]">
                <div className="w-full h-[250px] bg-[#F5F5F5] flex justify-center items-center relative">
                    <span className="flex gap-[8px] flex-col absolute right-[12px] top-[12px]"><p className="bg-white w-[34px] h-[34px] rounded-full flex items-center justify-center"><Heart /></p><p className="bg-white w-[34px] h-[34px] rounded-full flex items-center justify-center"><Eye /></p></span>
                    <img src={Month1} alt="" />
                </div>
                <h2 className="font-medium mt-[16px] mb-[8px]">HAVIT HV-G92 Gamepad</h2>
                <span className="flex gap-[12px] mb-[8px]"><p className="font-medium text-[#DB4444]">$120</p><del className="font-medium">$160</del></span>
                <div className="">⭐⭐⭐⭐⭐ (88)</div>
            </SwiperSlide>
            <SwiperSlide className="w-[270px]">
                <div className="w-full h-[250px] bg-[#F5F5F5] flex justify-center items-center relative">
                    <span className="flex gap-[8px] flex-col absolute right-[12px] top-[12px]"><p className="bg-white w-[34px] h-[34px] rounded-full flex items-center justify-center"><Heart /></p><p className="bg-white w-[34px] h-[34px] rounded-full flex items-center justify-center"><Eye /></p></span>
                    <img src={Month1} alt="" />
                </div>
                <h2 className="font-medium mt-[16px] mb-[8px]">HAVIT HV-G92 Gamepad</h2>
                <span className="flex gap-[12px] mb-[8px]"><p className="font-medium text-[#DB4444]">$120</p><del className="font-medium">$160</del></span>
                <div className="">⭐⭐⭐⭐⭐ (88)</div>
            </SwiperSlide>
        </Swiper>
        
      </div>
    );
  }
}

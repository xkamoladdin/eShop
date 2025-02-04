import React, { Component } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Game1 from'../../assets/game-card1.png'
import Game2 from'../../assets/game-card2.png'
import Game3 from'../../assets/game-card3.png'
import Game4 from'../../assets/game-card4.png'
import { NavLink } from "react-router-dom";
import { Heart, Eye } from 'lucide-react';

export default class Index extends Component {
    constructor(props) {
      super(props);
      this.state = {
        timeLeft: 300000, // 300000 sekund (taxminan 3.5 kun)
      };
    }
  
    componentDidMount() {
      this.timer = setInterval(() => {
        this.setState((prevState) => {
          if (prevState.timeLeft <= 1) {
            clearInterval(this.timer);
            return { timeLeft: 0 };
          }
          return { timeLeft: prevState.timeLeft - 1 };
        });
      }, 1000);
    }
  
    componentWillUnmount() {
      clearInterval(this.timer);
    }
  
    formatTime = (seconds) => {
      const days = Math.floor(seconds / (60 * 60 * 24));
      const hours = Math.floor((seconds % (60 * 60 * 24)) / (60 * 60));
      const minutes = Math.floor((seconds % (60 * 60)) / 60);
      const secs = seconds % 60;
  
      return `${days} : ${hours < 10 ? "0" : ""}${hours} : ${
        minutes < 10 ? "0" : ""
      }${minutes} : ${secs < 10 ? "0" : ""}${secs}`;
    };
  

  render() {
    return (
      <div className="container w-full">
        <div>
          <h2 className="font-semibold text-[#DB4444] mb-[23px] flex gap-[16px] items-center">
            <span className="w-[20px] h-[40px] bg-[#DB4444] rounded"></span>
            Today’s
          </h2>
          <div className="flex gap-[87px] mb-[40px]">
            <h1 className="text-[36px] font-semibold">Flash Sales</h1>
            <p className="text-3xl mt-2 font-bold">{this.formatTime(this.state.timeLeft)}</p>
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
        <div className="flex justify-center mb-[60px]">
            <NavLink to='/allproduct' className='inline-block font-medium text-[#FAFAFA] bg-[#DB4444] py-[16px] px-[48px] rounded border-[#DB4444] border duration-300 hover:bg-transparent hover:text-[#DB4444]'>View All Products</NavLink>
        </div>
        <hr className="mb-[80px]" />
      </div>
    );
  }
}

import React, { Component } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Game1 from'../../assets/game-card1.png'
import { NavLink } from "react-router-dom";

export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timeLeft: 300,
    };
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState((prevState) => ({
        timeLeft: prevState.timeLeft > 0 ? prevState.timeLeft - 1 : 0,
      }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes} : ${secs < 10 ? "0" : ""}${secs} : 00`;
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
            <p className="text-3xl mt-2">{this.formatTime(this.state.timeLeft)}</p>
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
                    <span className="flex gap-[8px] flex-col absolute right-[12px] top-[12px]"><p className="bg-white w-[34px] h-[34px] rounded-full flex items-center justify-center">O</p><p className="bg-white w-[34px] h-[34px] rounded-full flex items-center justify-center">O</p></span>
                    <img src={Game1} alt="" />
                </div>
                <h2 className="font-medium mt-[16px] mb-[8px]">HAVIT HV-G92 Gamepad</h2>
                <span className="flex gap-[12px] mb-[8px]"><p className="font-medium text-[#DB4444]">$120</p><del className="font-medium">$160</del></span>
                <div className="">⭐⭐⭐⭐⭐ (88)</div>
            </SwiperSlide>
            <SwiperSlide className="w-[270px]">
                <div className="w-full h-[250px] bg-[#F5F5F5] flex justify-center items-center relative">
                    <span className="text-[12px] text-[#FAFAFA] px-[12px] py-[4px] bg-[#DB4444] rounded absolute top-[12px] left-[12px]">-40%</span>
                    <span className="flex gap-[8px] flex-col absolute right-[12px] top-[12px]"><p className="bg-white w-[34px] h-[34px] rounded-full flex items-center justify-center">O</p><p className="bg-white w-[34px] h-[34px] rounded-full flex items-center justify-center">O</p></span>
                    <img src={Game1} alt="" />
                </div>
                <h2 className="font-medium mt-[16px] mb-[8px]">HAVIT HV-G92 Gamepad</h2>
                <span className="flex gap-[12px] mb-[8px]"><p className="font-medium text-[#DB4444]">$120</p><del className="font-medium">$160</del></span>
                <div className="">⭐⭐⭐⭐⭐ (88)</div>
            </SwiperSlide>
            <SwiperSlide className="w-[270px]">
                <div className="w-full h-[250px] bg-[#F5F5F5] flex justify-center items-center relative">
                    <span className="text-[12px] text-[#FAFAFA] px-[12px] py-[4px] bg-[#DB4444] rounded absolute top-[12px] left-[12px]">-40%</span>
                    <span className="flex gap-[8px] flex-col absolute right-[12px] top-[12px]"><p className="bg-white w-[34px] h-[34px] rounded-full flex items-center justify-center">O</p><p className="bg-white w-[34px] h-[34px] rounded-full flex items-center justify-center">O</p></span>
                    <img src={Game1} alt="" />
                </div>
                <h2 className="font-medium mt-[16px] mb-[8px]">HAVIT HV-G92 Gamepad</h2>
                <span className="flex gap-[12px] mb-[8px]"><p className="font-medium text-[#DB4444]">$120</p><del className="font-medium">$160</del></span>
                <div className="">⭐⭐⭐⭐⭐ (88)</div>
            </SwiperSlide>
            <SwiperSlide className="w-[270px]">
                <div className="w-full h-[250px] bg-[#F5F5F5] flex justify-center items-center relative">
                    <span className="text-[12px] text-[#FAFAFA] px-[12px] py-[4px] bg-[#DB4444] rounded absolute top-[12px] left-[12px]">-40%</span>
                    <span className="flex gap-[8px] flex-col absolute right-[12px] top-[12px]"><p className="bg-white w-[34px] h-[34px] rounded-full flex items-center justify-center">O</p><p className="bg-white w-[34px] h-[34px] rounded-full flex items-center justify-center">O</p></span>
                    <img src={Game1} alt="" />
                </div>
                <h2 className="font-medium mt-[16px] mb-[8px]">HAVIT HV-G92 Gamepad</h2>
                <span className="flex gap-[12px] mb-[8px]"><p className="font-medium text-[#DB4444]">$120</p><del className="font-medium">$160</del></span>
                <div className="">⭐⭐⭐⭐⭐ (88)</div>
            </SwiperSlide>
            <SwiperSlide className="w-[270px]">
                <div className="w-full h-[250px] bg-[#F5F5F5] flex justify-center items-center relative">
                    <span className="text-[12px] text-[#FAFAFA] px-[12px] py-[4px] bg-[#DB4444] rounded absolute top-[12px] left-[12px]">-40%</span>
                    <span className="flex gap-[8px] flex-col absolute right-[12px] top-[12px]"><p className="bg-white w-[34px] h-[34px] rounded-full flex items-center justify-center">O</p><p className="bg-white w-[34px] h-[34px] rounded-full flex items-center justify-center">O</p></span>
                    <img src={Game1} alt="" />
                </div>
                <h2 className="font-medium mt-[16px] mb-[8px]">HAVIT HV-G92 Gamepad</h2>
                <span className="flex gap-[12px] mb-[8px]"><p className="font-medium text-[#DB4444]">$120</p><del className="font-medium">$160</del></span>
                <div className="">⭐⭐⭐⭐⭐ (88)</div>
            </SwiperSlide>
            <SwiperSlide className="w-[270px]">
                <div className="w-full h-[250px] bg-[#F5F5F5] flex justify-center items-center relative">
                    <span className="text-[12px] text-[#FAFAFA] px-[12px] py-[4px] bg-[#DB4444] rounded absolute top-[12px] left-[12px]">-40%</span>
                    <span className="flex gap-[8px] flex-col absolute right-[12px] top-[12px]"><p className="bg-white w-[34px] h-[34px] rounded-full flex items-center justify-center">O</p><p className="bg-white w-[34px] h-[34px] rounded-full flex items-center justify-center">O</p></span>
                    <img src={Game1} alt="" />
                </div>
                <h2 className="font-medium mt-[16px] mb-[8px]">HAVIT HV-G92 Gamepad</h2>
                <span className="flex gap-[12px] mb-[8px]"><p className="font-medium text-[#DB4444]">$120</p><del className="font-medium">$160</del></span>
                <div className="">⭐⭐⭐⭐⭐ (88)</div>
            </SwiperSlide>
        </Swiper>
        <div className="flex justify-center mb-[60px]">
            <NavLink to='/allproduct' className='inline-block font-medium text-[#FAFAFA] bg-[#DB4444] py-[16px] px-[48px] rounded'>View All Products</NavLink>
        </div>
        <hr className="mb-[80px]" />
      </div>
    );
  }
}

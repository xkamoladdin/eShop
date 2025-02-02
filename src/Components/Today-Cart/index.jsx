import React, { Component } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timeLeft: 300, // 5 daqiqa (300 soniya)
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
    return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
  };

  render() {
    return (
      <div className="container w-full">
        <div>
          <h2 className="font-semibold text-[#DB4444] mb-[23px] flex gap-[16px] items-center">
            <span className="w-[20px] h-[40px] bg-[#DB4444] rounded"></span>
            Today’s
          </h2>
          <div className="flex flex-col items-center justify-center p-4 bg-gray-800 text-white rounded-2xl shadow-lg w-64">
            <h1 className="text-xl font-bold">Countdown Timer</h1>
            <p className="text-3xl font-mono mt-2">{this.formatTime(this.state.timeLeft)}</p>
          </div>
        </div>
        <Swiper
          spaceBetween={30}
          slidesPerView={4}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          className="w-full"
        >
          {[...Array(8)].map((_, index) => (
            <SwiperSlide key={index} className="border w-[270px]">asdfas</SwiperSlide>
          ))}
        </Swiper>
      </div>
    );
  }
}

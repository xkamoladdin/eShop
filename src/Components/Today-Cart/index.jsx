import React, { Component } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { NavLink } from "react-router-dom";
import { Heart, Eye } from 'lucide-react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import carousel from '../../JS/today';



// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
export default class Index extends Component {
    constructor(props) {
      super(props);
      this.state = {
        timeLeft: 300000, // 300000 sekund (taxminan 3.5 kun)
        data: carousel,
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
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={30}
          slidesPerView={4}
          navigation
          // pagination={{ clickable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
          className="w-full mb-[60px]"
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 10 },
            480: { slidesPerView: 2, spaceBetween: 15 },
            768: { slidesPerView: 3, spaceBetween: 20 },
            1024: { slidesPerView: 4, spaceBetween: 25 },
          }}
        >
          {this.state.data.map(({ id, model, dis, img, price, del }) => (
            <SwiperSlide className="w-[270px]" key={id}>
                <div className="w-full h-[250px] bg-[#F5F5F5] flex justify-center items-center relative">
                    <span className="text-[12px] text-[#FAFAFA] px-[12px] py-[4px] bg-[#DB4444] rounded absolute top-[12px] left-[12px]">{dis}</span>
                    <span className="flex gap-[8px] flex-col absolute right-[12px] top-[12px]"><p className="bg-white w-[34px] h-[34px] rounded-full flex items-center justify-center"><Heart /></p><p className="bg-white w-[34px] h-[34px] rounded-full flex items-center justify-center"><Eye /></p></span>
                    <img src={img} alt="" />
                </div>
                <h2 className="font-medium mt-[16px] mb-[8px]">{model}</h2>
                <span className="flex gap-[12px] mb-[8px]"><p className="font-medium text-[#DB4444]">{price}</p><del className="font-medium">{del}</del></span>
                <div className="">⭐⭐⭐⭐⭐ (88)</div>
            </SwiperSlide>
             ))}
        </Swiper>
        <div className="flex justify-center mb-[60px]">
            <NavLink to='/allproduct' className='inline-block font-medium text-[#FAFAFA] bg-[#DB4444] py-[16px] px-[48px] rounded border-[#DB4444] border duration-300 hover:bg-transparent hover:text-[#DB4444]'>View All Products</NavLink>
        </div>
        <hr className="mb-[80px]" />
      </div>
    );
  }
}

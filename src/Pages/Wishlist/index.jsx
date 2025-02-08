import React, { Component } from 'react'
import carousel from '../../JS/products';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Heart, Eye } from 'lucide-react';
import { NavLink } from "react-router-dom";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: carousel,
    };
  }
  render() {
    return (
      <div className='container'>
        <div className='flex items-center justify-between my-[80px]'>
          <h2>Wishlist (4)</h2>
          <NavLink to={'/'} className='py-[16px] px-[48px] border-2'>Move All To Bag</NavLink>
        </div>
         <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={30}
          slidesPerView={4}
          navigation
        //   pagination={{ clickable: true }}
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
            {this.state.data.map(({ id, model, img, price }) => (
            <SwiperSlide className="w-[270px]" key={id}>
                <div className="w-full h-[250px] bg-[#F5F5F5] flex justify-center items-center relative">
                    <span className="flex gap-[8px] flex-col absolute right-[12px] top-[12px]"><p className="bg-white w-[34px] h-[34px] rounded-full flex items-center justify-center"><Heart /></p><p className="bg-white w-[34px] h-[34px] rounded-full flex items-center justify-center"><Eye /></p></span>
                    <img src={img} alt="" />
                </div>
                <h2 className="font-medium mt-[16px] mb-[8px]">{model}</h2>
                <span className="flex gap-[12px] mb-[8px]"><p className="font-medium text-[#DB4444]">{price}</p><div className="">⭐⭐⭐⭐⭐ (65)</div></span>
            </SwiperSlide>
            ))}
        </Swiper>
        <div className='flex items-center justify-between my-[80px]'>
          <h2 className="font-semibold text-black mb-[23px] flex gap-[16px] items-center text-[13px] md:text-[16px]">
            <span className="w-[20px] h-[40px] bg-[#DB4444] rounded"></span>
            Just For You</h2>
          <NavLink to={'/'} className='py-[16px] px-[48px] border-2'>Move All To Bag</NavLink>
        </div>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={30}
          slidesPerView={4}
          navigation
        //   pagination={{ clickable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
          className="w-full mb-[140px]"
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 10 },
            480: { slidesPerView: 2, spaceBetween: 15 },
            768: { slidesPerView: 3, spaceBetween: 20 },
            1024: { slidesPerView: 4, spaceBetween: 25 },
          }}
        >
            {this.state.data.map(({ id, model,  img, price,  }) => (

            <SwiperSlide className="w-[270px]" key={id}>
                <div className="w-full h-[250px] bg-[#F5F5F5] flex justify-center items-center relative">
                    <span className="flex gap-[8px] flex-col absolute right-[12px] top-[12px]"><p className="bg-white w-[34px] h-[34px] rounded-full flex items-center justify-center"><Heart /></p><p className="bg-white w-[34px] h-[34px] rounded-full flex items-center justify-center"><Eye /></p></span>
                    <img src={img} alt="" />
                </div>
                <h2 className="font-medium mt-[16px] mb-[8px]">{model}</h2>
                <span className="flex gap-[12px] mb-[8px]"><p className="font-medium text-[#DB4444]">{price}</p><div className="">⭐⭐⭐⭐⭐ (88)</div></span>
            </SwiperSlide>
            ))}
        </Swiper>
      </div>
    )
  }
}

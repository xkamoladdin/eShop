import React, { Component } from 'react';
import PS5 from'../../assets/ps5.png'
import GUCCI from'../../assets/gucci.png'
import Amazon from'../../assets/amazon.png'
import woman from'../../assets/woman.png'
import { NavLink } from 'react-router-dom';


export default class Index extends Component {
  render() {
    return (
      <div className='container'>
        <div>
          <h2 className="font-semibold text-[#DB4444] mb-[23px] flex gap-[16px] items-center text-[13px] md:text-[16px]">
            <span className="w-[20px] h-[40px] bg-[#DB4444] rounded"></span>
            Featured
          </h2>
          <div className="flex justify-between mb-[60px]">
            <h1 className="md:text-[36px] text-[20px] font-semibold">New Arrival</h1>
          </div>
        </div>
        

        <div className='flex flex-col md:flex-row gap-[30px]'>
          <div className='max-w-[570px] relative w-full bg-[#0D0D0D] px-[30px] pt-[90px] rounded h-[600px]'>
            <img src={PS5} alt="" />
            <div className='absolute left-0 bottom-0 w-[320px] p-[32px]'>
              <h2 className='text-white text-[24px] font-semibold mb-[16px]'>PlayStation 5</h2>
              <p className='text-[14px] text-white mb-[16px]'>Black and White version of the PS5 coming out on sale.</p>
              <NavLink to={'/'} className='font-medium text-white border-b border-white'>Shop Now</NavLink>
            </div>
          </div>


          
          <div className='flex flex-col gap-[30px]'>

            <div className='max-w-[570px] relative w-full bg-[#0D0D0D] px-[0px] pt-[0px] rounded h-[284px] flex justify-end'>
              <img src={woman} alt="" />
              <div className='absolute left-0 bottom-0 w-[420px] p-[32px]'>
                <h2 className='text-white text-[24px] font-semibold mb-[16px]'>Women’s Collections</h2>
                <p className='text-[14px] text-white mb-[16px]'>Featured woman collections that <br /> give you another vibe.</p>
                <NavLink to={'/'} className='font-medium text-white border-b border-white'>Shop Now</NavLink>
              </div>
            </div>

            <div className='flex gap-[30px]'>


            <div className='max-w-[270px] relative w-full bg-[#0D0D0D] py-[30px] px-[40px] rounded h-[284px]'>
              <img src={Amazon} alt="" />
              <div className='absolute left-0 bottom-0 w-[320px] p-[32px]'>
                <h2 className='text-white text-[24px] font-semibold mb-[16px]'>Speakers</h2>
                <p className='text-[14px] text-white mb-[16px]'>Amazon wireless speakers</p>
                <NavLink to={'/'} className='font-medium text-white border-b border-white'>Shop Now</NavLink>
              </div>
            </div>
            <div className='max-w-[270px] relative w-full bg-[#0D0D0D] py-[30px] px-[40px] rounded h-[284px]'>
              <img src={GUCCI} alt="" />
              <div className='absolute left-0 bottom-0 w-[320px] p-[32px]'>
                <h2 className='text-white text-[24px] font-semibold mb-[16px]'>Perfume</h2>
                <p className='text-[14px] text-white mb-[16px]'>GUCCI INTENSE OUD EDP</p>
                <NavLink to={'/'} className='font-medium text-white border-b border-white'>Shop Now</NavLink>
              </div>
            </div>
            </div>
          </div>
        </div>



      </div>
    );
  }
}
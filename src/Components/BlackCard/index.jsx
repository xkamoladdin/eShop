import React, { Component } from 'react'
import JBL from'../../assets/JBJ.png'

export default class index extends Component {
  render() {
    return (
      <div className='container'>
        <div className="bg-black flex justify-between py-[69px]">
            <div className='px-[58px]'>
                <p className='text-[#00FF66] font-semibold'>Categories</p>
                <h2 className='text-[#FAFAFA] text-[48px] font-semibold'>Enhance Your <br /> Music Experience</h2>
                <p className='text-[#FAFAFA] py-[15px]'>23:07:2025</p>
                <button className='bg-[#00FF66] py-[16px] px-[48px] text-[#FAFAFA]'><a href="#">Buy Now</a></button>
            </div>

            <div className="JBL_card">
                <img src={JBL} alt="" />
            </div>
        </div>
      </div>
    )
  }
}

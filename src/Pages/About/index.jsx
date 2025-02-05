import React, { Component } from 'react'
import Side from '../../assets/Side.png'

export default class index extends Component {
  render() {
    return (
      <div className='container'>
        <div className='flex justify-between items-center my-[143px] space-x-[75px]'>
          <div className='max-w-[525px] w-full'>
            <h2 className='text-[54px] font-semibold'>Our Story</h2>
            <p className='my-[40px] text-[16px]'>Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an 
              active presense in Bangladesh. Supported by wide range of tailored marketing, data and service 
              solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region.</p>
              <p className='my-[24px] text-[16px]'>Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.</p>
          </div>
          <div>
            <img src={Side} alt="" />
          </div>
        </div>
      </div>
    )
  }
}

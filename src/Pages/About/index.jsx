import React, { Component } from 'react'
import Side from '../../assets/Side.png'
import Group from '../../assets/Group.png'
import Moneybag from '../../assets/Moneybag.png'
import Sale from '../../assets/Sale.png'
import Shopping from '../../assets/Shopping.png'

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

        <div className='flex justify-between items-center text-center'>
          <div>
            <img className='bg-[#000] p-[12px] my-[24px] mx-[100px] rounded-full' src={Group} alt="" />
            <h4>10.5k</h4>
            <p>Sallers active our site</p>
          </div>
          <div>
            <img className='my-[24px] mx-[100px] rounded-full' src={Sale} alt="" />
            <h4>33k</h4>
            <p>Mopnthly Produduct Sale</p>
          </div>
          <div>
            <img className='bg-[#000] p-[12px] my-[24px] mx-[100px] rounded-full' src={Shopping} alt="" />
            <h4>45.5k</h4>
            <p>Customer active in our site</p>
          </div>
          <div>
            <img className='bg-[#000] p-[12px] my-[24px] mx-[100px] rounded-full' src={Moneybag} alt="" />
            <h4>25k</h4>
            <p>Anual gross sale in our site</p>
          </div>
        </div>
      </div>
    )
  }
}
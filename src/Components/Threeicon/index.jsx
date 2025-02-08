import React, { Component } from 'react'
import delivery from '../../assets/delivery.png'
import secure from '../../assets/secure.png'
import Customer from '../../assets/Customer.png'


export default class index extends Component {
  render() {
    return (
      <div className="container flex justify-between text-center">
        <div className='flex flex-col md:flex-row my-[140px] mx-[70px]'>
            <div>
                <img className='bg-[#000] rounded-full p-[12px] my-[24px] mx-[140px]' src={delivery} alt="" />
                <h3 className='font-semibold text-[20px]'>FREE AND FAST DELIVERY</h3>
                <p>Free delivery for all orders over $140</p>
            </div>
            <div>
                <img className='bg-[#000] rounded-full p-[12px] my-[24px] mx-[140px]' src={Customer} alt="" />
                <h3 className='font-semibold text-[20px]'>24/7 CUSTOMER SERVICE</h3>
                <p>Friendly 24/7 customer support</p>
            </div>
            <div>
                <img className='bg-[#000] rounded-full p-[12px] my-[24px] mx-[140px]' src={secure} alt="" />
                <h3 className='font-semibold text-[20px]'>MONEY BACK GUARANTEE</h3>
                <p>We reurn money within 30 days0</p>
            </div>
        </div>
      </div>
    )
  }
}

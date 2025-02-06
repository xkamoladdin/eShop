import React, { Component } from 'react'
import { Phone } from 'lucide-react'
import { Mail } from 'lucide-react';

export default class index extends Component {
  render() {
    return (
      <div className='container mt-[181px] mb-[140px]'>
        <div className='flex gap-[30px]'>
        <div className='contact max-w-[355px] w-full pt-[40px] pl-[35px] pb-[51px] pr-[20px]'>
          <div>
      <span className='flex items-center gap-[16px] mb-[24px]'>
        <span className='bg-[#DB4444] text-white w-[40px] h-[40px] flex justify-center items-center rounded-full' >
      <Phone/>
        </span>
      Call To Us
      </span>
      <p className='mb-[16px]'>We are available 24/7, 7 days a week.</p>
      <p className='pb-[32px] border-b-2'>Phone: +8801611112222</p>
          </div>


          <div className='mt-[32px]'>
      <span className='flex items-center gap-[16px] mb-[24px]'>
        <span className='bg-[#DB4444] text-white w-[40px] h-[40px] flex justify-center items-center rounded-full' >
      <Mail />
        </span>
        Write To US
      </span>
      <p className='mb-[16px]'>Fill out our form and we will contact you within 24 hours.</p>
      <p className='mb-[16px]'>Emails: customer@exclusive.com</p>
      <p>Emails: support@exclusive.com</p>
          </div>
        </div>


        <form className='contact px-[31px] py-[40px]'>
            <div className='flex gap-[16px] mb-[32px]'>
            <input className='bg-[#F5F5F5] px-[16px] py-[13px] rounded' type="text" placeholder='Name'/>
            <input className='bg-[#F5F5F5] px-[16px] py-[13px] rounded' type="email" placeholder='Your Email'/>
            <input className='bg-[#F5F5F5] px-[16px] py-[13px] rounded' type="phone" placeholder='Your Phone'/>
            </div>
            {/* <input className='bg-[#F5F5F5] px-[16px] pt-[13px] pb-[170px] rounded w-full' type="massage" placeholder='Your Massage'/> */}

            <textarea name="" id="" cols="30" rows="10" className='bg-[#F5F5F5] px-[16px] h-[207px] py-[13px] rounded w-full resize-none' placeholder='Your Massage'></textarea>
            <div className='flex justify-end mt-[32px]'>
              <button className='bg-[#DB4444] text-white py-[15px] px-[40px] rounded-[5px]'>Send Massage</button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

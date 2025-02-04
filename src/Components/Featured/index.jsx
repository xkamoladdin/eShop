// import React, { Component } from 'react'

// export default class index extends Component {
//   render() {
//     return (
//       <div className='container'>Featured

//       </div>
//     )
//   }
// }



import React, { Component } from 'react';
import PS5 from'../../assets/ps5.png'
import GUCCI from'../../assets/gucci.png'
import Amazon from'../../assets/amazon.png'
import woman from'../../assets/woman.png'


export default class Index extends Component {
  render() {
    return (
      <div className='container mx-auto p-4'>
        <h1 className='text-2xl font-bold mb-6'>Featured</h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
          <div className='bg-gray-800 text-white p-6 rounded-lg shadow-lg'>
            <img src={PS5} alt='PlayStation 5' className='w-full h-48 object-cover rounded-md' />
            <h2 className='text-xl font-bold mt-4'>PlayStation 5</h2>
            <p className='mt-2'>Black and White version of the PS5 coming out on sale.</p>
            <a href='#' className='mt-4 inline-block bg-blue-500 text-white py-2 px-4 rounded'>Shop Now</a>
          </div>
          <div className='bg-gray-800 text-white p-6 rounded-lg shadow-lg'>
            <img src={woman} alt='Women' className='w-full h-48 object-cover rounded-md' />
            <h2 className='text-xl font-bold mt-4'>Women's Collections</h2>
            <p className='mt-2'>Featured woman collections that give you another vibe.</p>
            <a href='#' className='mt-4 inline-block bg-blue-500 text-white py-2 px-4 rounded'>Shop Now</a>
          </div>
          <div className='bg-gray-800 text-white p-6 rounded-lg shadow-lg'>
            <img src={Amazon} alt='Speakers' className='w-full h-48 object-cover rounded-md' />
            <h2 className='text-xl font-bold mt-4'>Speakers</h2>
            <p className='mt-2'>Amazon wireless speaker's.</p>
            <a href='#' className='mt-4 inline-block bg-blue-500 text-white py-2 px-4 rounded'>Shop Now</a>
          </div>
          <div className='bg-gray-800 text-white p-6 rounded-lg shadow-lg'>
            <img src={GUCCI} alt='Perfume' className='w-full h-48 object-cover rounded-md' />
            <h2 className='text-xl font-bold mt-4'>Perfume</h2>
            <p className='mt-2'>GUCCI INTENSE COLD DEEP.</p>
            <a href='#' className='mt-4 inline-block bg-blue-500 text-white py-2 px-4 rounded'>Shop Now</a>
          </div>
        </div>
      </div>
    );
  }
}
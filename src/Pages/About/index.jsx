import React, { Component } from 'react'
import Logo from '../../assets/react.svg'

export default class index extends Component {
  render() {
    return (
      <div>
        <div>
          <div>
            <h1>Our Story</h1>
            <p>Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with
              an active presense in Bangladesh. Supported by wide range of tailored marketing
              , data and service solutions, Exclusive has 10,500 sallers and
              300 brands and serves 3 millioons customers across the region. </p>
            <p>Exclusive has more than 1 Million products to offer
              , growing at a very fast. Exclusive offers a diverse assotment
              in categories ranging  from consumer.</p>
          </div>
          <img src={Logo} alt="" />
        </div>

        <br />
        <br />
        <br />

        <div>
          <div className='bg:white hover:red'>
            <img src="" alt="" />
            <h3>10.5k </h3>
            <p>Sallers active our site</p>
          </div>


          <div className='bg:white hover:red'>
            <img src="" alt="" />
            <h3>10.5k </h3>
            <p>Sallers active our site</p>
          </div>


          <div className='bg:white hover:red'>
            <img src="" alt="" />
            <h3>10.5k </h3>
            <p>Sallers active our site</p>
          </div>


          <div className='bg:white hover:red'>
            <img src="" alt="" />
            <h3>10.5k </h3>
            <p>Sallers active our site</p>
          </div>


          <div className='bg:white hover:red'>
            <img src="" alt="" />
            <h3>10.5k </h3>
            <p>Sallers active our site</p>
          </div>
        </div>


        

      </div>


    )
  }
}

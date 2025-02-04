import React, { Component } from 'react'
import Header from'../../Components/Header'
import Today from'../../Components/Today-Cart'
import BlackCard from '../../Components/BlackCard'
import Featured from '../../Components/Featured'
import Categories from '../../Components/Categories'
import ThisMonth from '../../Components/ThisMonth'
import OurProducts from '../../Components/OurProducts'
import Threeicon from '../../Components/Threeicon'

export default class index extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Today />
        <Categories />
        <ThisMonth />
        <BlackCard />
        <OurProducts />
        <Featured />
        <Threeicon />
      </div>
    )
  }
}

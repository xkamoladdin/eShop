import React, { Component } from 'react'
import Header from'../../Components/Header'
import Today from'../../Components/Today-Cart'
import BlackCard from '../../Components/BlackCard'
import Featured from '../../Components/Featured'

export default class index extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Today />
        <BlackCard />
        <Featured />
      </div>
    )
  }
}

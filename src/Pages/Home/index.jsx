import React, { Component } from 'react'
import Header from'../../Components/Header'
import Today from'../../Components/Today-Cart'

export default class index extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Today />
      </div>
    )
  }
}

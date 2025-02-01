import React, { Component } from 'react'
import Navbar from'./Components/Navbar'
import { Route, Switch } from 'react-router-dom'

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
      </div>
    )
  }
}

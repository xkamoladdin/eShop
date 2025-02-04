import React, { Component } from 'react'
import Navbar from'./Components/Navbar'

import { Route, Switch } from 'react-router-dom'
import About from'./Pages/About'
import Account from'./Pages/Account'
import Cart from'./Pages/Cart'
import Checkout from'./Pages/Checkout'
import Contact from'./Pages/Contact'
import Home from'./Pages/Home'
import Wishlist from'./Pages/Wishlist'
import Singup from'./Pages/Singup'
import Login from'./Pages/Login'
import Footer from'./Components/Footer'

export default class App extends Component {
  render() {
    return (
      <div>



        <Switch>
          <Route exact path={'/'} component={Navbar} />
          <Route path={'/about'} component={Navbar} />
          <Route path={'/account'} component={Navbar} />
          <Route path={'/cart'} component={Navbar} />
          <Route path={'/checkout'} component={Navbar} />
          <Route path={'/contact'} component={Navbar} />
          <Route path={'/wishlist'} component={Navbar} />
          <Route path={'/signup'} component={Navbar} />
          <Route path={'/login'} component={Navbar} />
        </Switch>


        <Switch>

          <Route exact path={'/'} component={Home} />
          <Route path={'/about'} component={About} />
          <Route path={'/account'} component={Account} />
          <Route path={'/cart'} component={Cart} />
          <Route path={'/checkout'} component={Checkout} />
          <Route path={'/contact'} component={Contact} />
          <Route path={'/wishlist'} component={Wishlist} />
          <Route path={'/signup'} component={Singup} />
          <Route path={'/login'} component={Login} />
          <Route>
            <h1>404</h1>
          </Route>
          
        </Switch>

        <Switch>
          <Route exact path={'/'} component={Footer} />
          <Route path={'/about'} component={Footer} />
          <Route path={'/account'} component={Footer} />
          <Route path={'/cart'} component={Footer} />
          <Route path={'/checkout'} component={Footer} />
          <Route path={'/contact'} component={Footer} />
          <Route path={'/wishlist'} component={Footer} />
          <Route path={'/signup'} component={Footer} />
          <Route path={'/login'} component={Footer} />
        </Switch>
        
      </div>
    )
  }
}

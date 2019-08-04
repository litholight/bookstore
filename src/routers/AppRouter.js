import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { NavLink } from 'react-router-dom'

import HomePage from '../pages/homepage';
import CartPage from '../pages/cartpage';
import HelpPage from '../pages/helppage';
import NotFoundPage from '../pages/notfoundpage';

const Header = () => (
  <header>
      <div>
          <NavLink to="/" activeClassName="is-active" exact={true}>Home</NavLink>
          <NavLink to="/cart" activeClassName="is-active">Cart</NavLink>
          <NavLink to="/help" activeClassName="is-active">Help</NavLink> 
      </div>
      <h1>Sophia's Bookstore</h1>
  </header>
);

const AppRouter = () => (
  <BrowserRouter>
      <div className='page-container'>
          <Header/>
          <Switch>
              <Route exact={true} path="/" component={HomePage}/>
              <Route exact path="/cart" component={CartPage}/>
              <Route exact path="/help" component={HelpPage}/>
              <Route component={NotFoundPage}/>
          </Switch>
      </div> 
  </BrowserRouter>
);

export default AppRouter;
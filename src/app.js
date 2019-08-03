import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link  } from 'react-router-dom';
import { NavLink } from 'react-router-dom'
// import AppRouter from '../src/routers/AppRouter'
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const HomePage = () => (
    <div>
        <h2>Homepage</h2>
    </div>
);

const CartPage = () => (
    <div>
        <h2>My Cart</h2>
    </div>
);

const HelpPage = () => (
    <div>
        <h2>Help</h2>
    </div>
);

const NotFoundPage = () => (
    <div>
        <h2>404! - <Link to="/">Go Home</Link></h2>
    </div>
);

const Header = () => (
    <header>
        <div>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/cart">Cart</NavLink>
            <NavLink to="/help">Help</NavLink> 
        </div>
        <h1>My Book Store</h1>
    </header>
);

const routes = (
    <BrowserRouter>
        <div>
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

ReactDOM.render(routes, document.getElementById('app'));
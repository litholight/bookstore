import React from 'react';
import { NavLink } from 'react-router-dom'
import ProductListing from '../components/ProductListing';

import data from '../data/products.json';

export default function HomePage(props) {
    return <div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/cartpage">Cart</NavLink>
        <h2>Homepage</h2>
        <ProductListing products={data.products} />
    </div>
}
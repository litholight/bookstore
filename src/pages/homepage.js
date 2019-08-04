import React from 'react';
import ProductListing from '../components/ProductListing';
import data from '../data/products.json';

export default (props) => (
    
    <div>
        <h2>Currently for sale</h2>
        <ProductListing product={ data.products } />
    </div>
);

import React from 'react';
import ProductListItem from '../ProductListItem'

export default (props) => {
    return(
        <div className='product-listing'>
            {
                props.product.map( product => 
                    <ProductListItem product={product} />)
            }
        </div>
    );
};


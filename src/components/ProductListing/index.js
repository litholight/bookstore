import React from 'react';
import ProductListItem from '../ProductListItem'

export default (props) => {
    return(
        <div>
            {
                props.product.map( product => 
                    <ProductListItem product={product} />)
            }
        </div>
    );
};


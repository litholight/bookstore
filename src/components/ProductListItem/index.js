import React from 'react';

export default (props) => {
    return(
        <div className='product-list-item'>
            <h3>{ props.product.name }</h3>
            <img
                height={150}
                title={ props.product.name }
                src= { `/images/products/${props.product.image}` }
            />
            <div>{ props.product.description }</div>
            <div>${ props.product.price }</div>
            <div>
                <button>Add to cart</button>
            </div>
        </div>
    );
};


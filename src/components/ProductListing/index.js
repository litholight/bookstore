import React from 'react';
import ProductListItem from '../ProductListItem'
import { connect } from 'react-redux';
import { cartItemsWithQuantities } from '../cart';

const ProductListing = (props) => {
    return(
        <div className='product-listing'>
            {
                props.product.map( product => 
                    <ProductListItem 
                        product={product} 
                        addToCart={props.addToCart}
                        cart={cartItemsWithQuantities(props.cart)}    
                    />)
            }
        </div>
    );
};

function mapStateToProps(state) {
    return {
        cart: state.cart
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addToCart: (item) => {
            dispatch({ type: 'ADD', payload: item })
        },
        removeFromCart: (item) => {
            dispatch({ type: 'REMOVE', payload: item })
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductListing)
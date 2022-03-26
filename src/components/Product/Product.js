import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import './Product.css'

const Product = (props) => {
    const {name, picture, _id, price} = props.product;
    const {handleAddBtn, product} = props;
    return (
        <div className='product'>
            <img src={picture} alt="" />
            <div className='product-info'>
                <h3>Name: {name}</h3>
                <p>Price: ${price}</p>
                <p>ID: {_id}</p>
            </div>
            <button onClick={() => handleAddBtn(product)} className='btncart'>
                <p className='addCart'>Add to Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;
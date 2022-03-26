import React from 'react';
import './Product.css'

const Product = (props) => {
    const {name, picture, _id, price} = props.product;
    return (
        <div className='product'>
            <img src={picture} alt="" />
            <h3>Name: {name}</h3>
            <p>Price: ${price}</p>
            <p>ID: {_id}</p>
        </div>
    );
};

export default Product;
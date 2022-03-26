import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {name} = props;
    console.log("props");
    return (
        <div>
            <h3>Name: {name}</h3>
            
        </div>
    );
};

export default Cart;
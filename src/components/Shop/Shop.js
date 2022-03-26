import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import Selected from '../Selected/Selected';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect( () => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[]);

    const handleAddBtn = (product) => {
        // console.log(product._id);
        const newCart = [...cart, product];
        setCart(newCart);
    }

    return (
        <div className='shop-container'>
            <div className='product-container'>
                {
                    products.map(product => <Product
                    key={product._id}
                    product ={product}
                    handleAddBtn={handleAddBtn}
                    ></Product>)
                }
            </div>

            <div className='cart-container'>
                <h2>Order details:</h2>
                <p>Selected Item: {cart.length}</p>
                {
                    cart.map(itemName => <Selected itemName={itemName}
                    ></Selected>)
                }
                <button>
                    
                    <p>Choose For Me</p>
                </button>
                <button>
                    <p>Choose Again</p>
                </button>
            </div>
        </div>
    );
};

export default Shop;
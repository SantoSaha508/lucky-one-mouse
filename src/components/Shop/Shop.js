import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import Selected from '../Selected/Selected';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [random, setRandom] = useState([]);

    function chooseForOne() {
        const randomitem = cart[Math.floor(Math.random()*cart.length)];
        setRandom(randomitem);
    }

    function clear(){
        // handle this problem at nigth.
        const clearCart = [];
        setCart(clearCart);
        setRandom(clearCart);
    }

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
                <div className='cart-heading'>
                    <h2>Order details:</h2>
                    <hr />
                    <p>Selected Item: {cart.length}</p>
                
                    {
                        cart.map(itemName => <Selected 
                        itemName={itemName}
                        key={itemName._id}
                        ></Selected>)
                    }
                    {/* Choose btn */}
                    <p className='chooseOne'>{random.name}
                    </p>
                    
                    <button onClick={chooseForOne} className='chooseBtn'>
                        <p>Choose</p>
                    </button>

                    {/* Clear btn */}
                    <button onClick={clear} className='chooseBtn'>
                        <p>Clear</p>
                    </button>

                </div> 
            </div>
        </div>
    );
};

export default Shop;
import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className='mainHead'>
            <div className='logo'>
                <h3>Mouse BD.com</h3>
            </div>
            <div className='menu'>
                <a href="/home">Home</a>
                <a href="/order">Order</a>
                <a href="/contact">Contract</a>
                <a href="/about">About</a>
            </div>
        </div>
    );
};

export default Header;
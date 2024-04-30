import React from "react";
import './ShoppingCart.css';
import Navbar from "../Navbar/Navbar";
import Cart from './Cart/Cart.jsx';
import Payment from './Payment/Payment.jsx';

function ShoppingCart(){
    return (
        <div>
            <Navbar />
            <div className="shopping">
                <Cart />
                <Payment />
            </div>
        </div>
    )
}

export default ShoppingCart;
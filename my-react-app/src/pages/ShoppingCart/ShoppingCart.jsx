import React from "react";
import './ShoppingCart.css';
import Navbar from "../../components/Navbar/Navbar.jsx";
import Cart from '../../components/Cart/Cart.jsx';
import Payment from '../../components/Payment/Payment.jsx';

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
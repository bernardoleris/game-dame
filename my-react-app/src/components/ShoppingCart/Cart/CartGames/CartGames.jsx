import React from "react";
import './CartGames.css'

function CartGames(props){
    return (
        <div className="cart-games">
            <div className="cart-title">{props.title}</div>
            <div className="cart-platform">{"Plataforma: " + props.platform}</div>
            <div className="cart-price">{props.price}</div>
            <img src={props.img} alt="" className="cart-img"/>
        </div>
    )
}

export default CartGames;
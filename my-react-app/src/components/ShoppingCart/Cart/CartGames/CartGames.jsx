import React from "react";
import './CartGames.css'

function CartGames(props){
    return (
        <div className="cart-flexbox">
            <div className="cart-gamestexts">
                <div className="cart-title">{props.title}</div>
                <div className="cart-platform">{"Plataforma: " + props.platform}</div>
                <div className="cart-price">{props.price}</div>
            </div>
            <div>
                <img src={props.img} alt="" className="cart-img"/>
            </div>
        </div>
    )
}

export default CartGames;
import React from "react";
import './Cart.css'
import CartGames from './CartGames/CartGames.jsx'

function Cart(){
    return (
        <div className="cart">
            <p className="cart-texto">Carrinho de Compras</p>
            <div className="cart-container">
                <CartGames
                    img="https://image.api.playstation.com/vulcan/ap/rnd/202007/3122/W5DMW31LjfCHMdHUzbzXqA3H.jpg"
                    title="Sponge Bob: Battle 
                    for BikiniBottom"
                    platform="PC"
                    price="R$ 299,00"
                />
            </div>
        </div>
    )
}

export default Cart;
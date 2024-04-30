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
                <CartGames
                    img="https://image.api.playstation.com/vulcan/img/rnd/202009/2921/rS7dirQTbNRco8GdBQdeLV2d.png"
                    title="Death Stranding"
                    platform="PC"
                    price="R$ 299,00"
                />
                <div className="line"></div> {/* Div para a linha */}
                <div className="total-price">
                    <div>R$ 598,00</div>
                    <div>Total</div>
                </div>
            </div>
        </div>
    )
}

export default Cart;
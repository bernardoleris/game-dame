import React, { useState } from "react";
import Card from "../Card/Card";
import './PerfilJogos.css';
import { CiShoppingCart } from "react-icons/ci";
import { Link } from "react-router-dom";


function PerfilJogos(){
    return (
            <div className="perfil-jogos">
                <div className="jogos">
                    <p className="jogos-texto">Jogos adquiridos:</p>
                    <div className="jogos-img">
                        <Card
                            img="https://image.api.playstation.com/vulcan/ap/rnd/202007/3122/W5DMW31LjfCHMdHUzbzXqA3H.jpg"
                            nome="card1"
                            inicial="Adicionar Avaliação"
                        />
                        <Card 
                            img="https://image.api.playstation.com/vulcan/ap/rnd/202203/2414/znGEA8zCSg2Pgt5f7AAyBItL.jpg"
                            nome="card2"
                            inicial="Adicionar Avaliação"
                        />
                         <Card 
                            img="https://image.api.playstation.com/vulcan/img/rnd/202010/2217/Z7hV9hpxaxrPeZJp5b3iThJp.png"
                            nome="card3"
                            inicial="Adicionar Avaliação"
                        />
                        <Card 
                            img="https://image.api.playstation.com/vulcan/img/rnd/202009/2921/rS7dirQTbNRco8GdBQdeLV2d.png"
                            nome="card4"
                            inicial="Adicionar Avaliação"
                        />
                    </div>  
                </div>
                <Link to='/shoppingcart'><CiShoppingCart id="shopping-cart"/></Link>
            </div>
    )
}

export default PerfilJogos;
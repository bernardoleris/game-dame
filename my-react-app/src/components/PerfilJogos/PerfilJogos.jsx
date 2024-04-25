import React from "react";
import Card from "../Card/Card";
import './PerfilJogos.css';

//Aprenda a usar styled components
// divida em pastas, ex: EdicaoDados -> EdicaoDados.jsx/ EdicaoDados.js
// Aprender Controladores de states globais: redux ou Jotai(prefiro o jotai)
function PerfilJogos(){
    return (
            <div className="perfil-jogos">
                <div className="jogos">
                    <p className="jogos-texto">Jogos adquiridos:</p>
                    <div className="jogos-img">
                        <Card
                            img="https://image.api.playstation.com/vulcan/ap/rnd/202007/3122/W5DMW31LjfCHMdHUzbzXqA3H.jpg"
                            note="100/100"
                        />
                        <Card 
                            img="https://image.api.playstation.com/vulcan/ap/rnd/202203/2414/znGEA8zCSg2Pgt5f7AAyBItL.jpg"
                            note="95/100"
                        />
                         <Card 
                            img="https://image.api.playstation.com/vulcan/img/rnd/202010/2217/Z7hV9hpxaxrPeZJp5b3iThJp.png"
                            note="75/100"
                        />
                        <Card 
                            img="https://image.api.playstation.com/vulcan/img/rnd/202009/2921/rS7dirQTbNRco8GdBQdeLV2d.png"
                            note="Adicionar avaliação"
                        />
                    </div>
                </div>
            </div>
    )
}

export default PerfilJogos;
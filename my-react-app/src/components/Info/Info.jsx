import React from "react";
import './Info.css';
import Perfil from '../Perfil/Perfil.jsx';
import PerfilJogos from '../PerfilJogos/PerfilJogos.jsx';

function Info(){
    return (
        <div className="info">
            <Perfil />
            <PerfilJogos />
        </div>
    )
}

export default Info;
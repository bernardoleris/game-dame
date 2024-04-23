import React from "react";
import '../styles/Perfil.css';
import Perfil from './Perfil';
import PerfilJogos from './PerfilJogos';

function Info(){
    return (
        <div className="info">
            <Perfil />
            <PerfilJogos />
        </div>
    )
}

export default Info;
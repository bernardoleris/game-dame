import React from "react";
import './Info.css';
import Perfil from './Perfil/Perfil.jsx';
import PerfilJogos from './PerfilJogos/PerfilJogos.jsx';
import Navbar from "../Navbar/Navbar.jsx";

function Info(){
    return (
        <div>
            <Navbar />
            <div className="info">
                <Perfil />
                <PerfilJogos />
            </div>
        </div>
    )
}

export default Info;
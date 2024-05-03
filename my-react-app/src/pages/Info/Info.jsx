import React from "react";
import './Info.css';
import Perfil from '../../components/Perfil/Perfil.jsx';
import PerfilJogos from '../../components/PerfilJogos/PerfilJogos.jsx';
import Navbar from "../../components/Navbar/Navbar.jsx";

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
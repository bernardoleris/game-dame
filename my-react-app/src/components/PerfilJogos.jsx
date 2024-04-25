import React from "react";
import '../styles/Perfil.css';

//Aprenda a usar styled components
// divida em pastas, ex: EdicaoDados -> EdicaoDados.jsx/ EdicaoDados.js
// Aprender Controladores de states globais: redux ou Jotai(prefiro o jotai)
function PerfilJogos(){
    return (
            <div className="perfil-jogos">
                <div className="jogos">
                    <p className="jogos-texto">Jogos adquiridos:</p>
                </div>
            </div>
    )
}

export default PerfilJogos;
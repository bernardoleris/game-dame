import React from "react";
import '../styles/Perfil.css';

function Perfil(){
    return (
        <div className="perfil">
            <div className="perfil-texto">
                <h1 className="perfil-titulo">Olá, Nome do Usuário</h1>
                <p className="perfil-escrito">Seu email é nomeusuario@gmail.com</p>
                <p className="perfil-escrito">Seu CPF é 123.456.123-50</p>
            </div>
        </div>
    )
}

export default Perfil;
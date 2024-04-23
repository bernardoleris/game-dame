import React from "react";
import '../styles/Navbar.css';
import avatarImage from '../assets/navbar-avatar.png'; // Importe a imagem

function Navbar(){
    return (
        <div className="header">
            <img src={avatarImage} alt="Avatar" className="navbar-avatar"/>
            <div className="bar">
                <a href="" className="navbar-texto">Lançamentos</a>
                <div className="barra-vertical"></div>
                <a href="" className="navbar-texto">Populares</a>
                <div className="barra-vertical"></div>
                <a href="" className="navbar-texto">Gêneros</a>
                <div className="barra-vertical"></div>
                <a href="" className="navbar-texto">Promoções</a>
                <div className="barra-vertical"></div>
                <a href="" className="navbar-texto">Conta</a>
            </div>
            <div className="pesquisa"></div>
        </div>
    )
}

export default Navbar;
import React from "react";
import '../styles/Navbar.css';
import avatarImage from '../assets/navbar-avatar.png'; 

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
            <input type="text" className="pesquisa"/>
        </div>
    )
}

export default Navbar;
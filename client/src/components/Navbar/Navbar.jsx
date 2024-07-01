import React from "react";
import './Navbar.css';
import '../../styles/Index.css';
import avatarImage from '../../assets/navbar-avatar.png'; 
import Searchbar from "./Searchbar/Searchbar";
import { NavLink } from 'react-router-dom';

function Navbar(){
    return (
        <div className="header">
            <NavLink to="/info" className="navbar-avatar-link">
                <img src={avatarImage} alt="Avatar" className="navbar-avatar"/>
            </NavLink>
            <div className="bar">
                <NavLink to="/releases" className={({isActive}) => (isActive ? "navbar-texto active-style" : 'navbar-texto')}>Lançamentos</NavLink>
                <div className="barra-vertical"></div>
                <NavLink to="/underdevelopment" className={({isActive}) => (isActive ? "navbar-texto active-style" : 'navbar-texto')}>Populares</NavLink>
                <div className="barra-vertical"></div>
                <NavLink to="/underdevelopment" className={({isActive}) => (isActive ? "navbar-texto active-style" : 'navbar-texto')}>Gêneros</NavLink>
                <div className="barra-vertical"></div>
                <NavLink to="/sales" className={({isActive}) => (isActive ? "navbar-texto active-style" : 'navbar-texto')}>Promoções</NavLink>
                <div className="barra-vertical"></div>
                <NavLink to="/info" className={({isActive}) => (isActive ? "navbar-texto active-style" : 'navbar-texto')}>Conta</NavLink>
            </div>
            <Searchbar />
        </div>
    )
}

export default Navbar;

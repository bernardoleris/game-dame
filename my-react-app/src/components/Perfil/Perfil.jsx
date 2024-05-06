import React from "react";
import './Perfil.css';
import { RiPencilFill } from "react-icons/ri";
import { FaRegTrashAlt } from "react-icons/fa";
import Button from "../Button.jsx";

function Perfil(){
    return (
        <div className="perfil">
            <div className="perfil-texto">
                <h1 className="perfil-titulo">Olá, Nome do Usuário</h1>
                <p className="perfil-escrito">Seu email é nomeusuario@gmail.com</p>
                <p className="perfil-escrito">Seu CPF é 123.456.789-00 </p>
                <Button text="Alterar Dados" icon={<RiPencilFill />} />
                <Button text="Excluir Conta" icon={<FaRegTrashAlt />} />
                <Button text="Tela do admin" />
            </div>
        </div>
    )
}

export default Perfil;

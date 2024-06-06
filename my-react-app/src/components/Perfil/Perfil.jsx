import React from "react";
import './Perfil.css';
import { RiPencilFill } from "react-icons/ri";
import { FaRegTrashAlt } from "react-icons/fa";
import Button from "../Button.jsx";
import { Link } from "react-router-dom";

function Perfil(){
    return (
        <div className="perfil">
            <div className="perfil-texto">
                <h1 className="perfil-titulo">Olá, &lt;&lt;Nome do Usuário&gt;&gt;</h1>
                <p className="perfil-escrito">Seu email é nomeusuario@email.com</p>
                <p className="perfil-escrito">Seu CPF é 123.456.789-00 </p>
                <Button text="Alterar Dados" icon={<RiPencilFill />} />
                <Button text="Excluir Conta" icon={<FaRegTrashAlt />} />
                <Link to="/admin">
                    <Button text="Tela do admin" />
                </Link>
            </div>
        </div>
    )
}

export default Perfil;

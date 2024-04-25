import React from "react";
import '../styles/Perfil.css';
import { RiPencilFill } from "react-icons/ri";
import { FaRegTrashAlt} from "react-icons/fa";

function Perfil(){
    return (
        <div className="perfil">
            <div className="perfil-texto">
                <h1 className="perfil-titulo">Olá, Nome do Usuário</h1>
                <p className="perfil-escrito">Seu email é nomeusuario@gmail.com</p>
                <p className="perfil-escrito">Seu CPF é 123.456.789-00 </p>
                <a href="" className="perfil-botao">Alterar Dados <span className="perfil-icon"><RiPencilFill /></span></a>
                <a href="" className="perfil-botao">Excluir Conta <span className="perfil-icon"><FaRegTrashAlt /></span></a>
                <a href="" className="perfil-botao">Tela do admin</a>
            </div>
        </div>
    )
}

export default Perfil;
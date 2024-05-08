import React from 'react';
import imagem from '../assets/register-img.png'
import Input from '../components/Input'
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import '../styles/AcessPages.css'

function Register(){
    return (
        <div className='acess-pages'>
            <div className='form-pages'>
                <div className='all-pages'>
                    <div className='other-pages'>
                        <div className='input-pages'>
                            <div className='form-texto'>Registrar</div>
                            <Input placeholder="Nome de usuário" />
                            <Input placeholder="E-mail" />
                            <Input placeholder="CPF" />
                            <Input placeholder="Senha" />
                            <Input placeholder="Confirmar Senha" />
                        </div>
                        <div className='arrow-container'>
                            <FaArrowRightLong className='arrow'/>
                        </div>
                    </div>
                <div className='acess-container'>
                    <Link to='/' className='acess-texto'>Fazer Login</Link>
                </div>
                </div>
            </div>
                <img src={imagem} alt="" className='imagem'/>
        </div>
    )
}

export default Register;

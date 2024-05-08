import React from 'react';
import imagem from '../assets/register-img.png'
import Input from '../components/Input'
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import '../styles/AcessPages.css'

function Login(){
    return (
        <div className='acess-pages'>
            <div className='form-pages'>
                <div className='all-pages'>
                    <div className='other-pages'>
                        <div className='input-pages'>
                            <div className='form-texto'>Login</div>
                            <Input placeholder="E-mail" />
                            <Input placeholder="Senha" />
                        </div>
                        <div className='arrow-container'>
                            <Link to='/info'><FaArrowRightLong className='arrow'/></Link>
                        </div>
                    </div>
                    <div className='acess-container'>
                        <Link to='/register' className='acess-texto'>Criar conta</Link>
                        <Link to='/forgotpassword' className='acess-texto'>Esqueceu a Senha</Link>
                    </div>
                </div>
            </div>
                <img src={imagem} alt="" className='imagem'/>
        </div>
    )
}

export default Login;
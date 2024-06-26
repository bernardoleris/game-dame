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
                            <div className='form-texto'>Recuperar Conta</div>
                            <Input placeholder="E-mail" />
                        </div>
                        <div className='arrow-container'>
                            <Link to='/'><FaArrowRightLong className='arrow'/></Link>
                        </div>
                    </div>
                <div className='acess-container'>
                    <div><Link to='/register' className='acess-texto'>Criar conta</Link></div>
                    <div><Link to='/' className='acess-texto'>Fazer Login</Link></div>
                </div>
                </div>
            </div>
                <img src={imagem} alt="" className='imagem'/>
        </div>
    )
}

export default Login;
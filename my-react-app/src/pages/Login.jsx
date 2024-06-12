import React, { useState } from 'react';
import { Link } from "react-router-dom";
import imagem from '../assets/register-img.png';
import Input from '../components/Input';
import { FaArrowRightLong } from "react-icons/fa6";
import '../styles/AcessPages.css';
import api from "../services/api";

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!emailPattern.test(email)) {
            alert('Por favor, insira um email válido.');
            return;
        }

        try {
            const response = await api.post('/login', {
                email,
                password
            });

            if (response.status === 200) {
                window.location.href = '/info';
            }
        } catch (error) {
            console.error('Erro ao fazer login:', error);
            alert('Erro ao fazer login. Verifique o console para mais detalhes.');
        }
    };

    return (
        <div className='acess-pages'>
            <div className='form-pages'>
                <div className='all-pages'>
                    <form onSubmit={handleSubmit}>
                        <div className='other-pages'>
                            <div className='input-pages'>
                                <div className='form-texto'>Login</div>
                                <Input 
                                    placeholder="E-mail"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <Input 
                                    placeholder="Senha"
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            <div className='arrow-container'>
                                <button type="submit">
                                    <FaArrowRightLong className='arrow'/>
                                </button>
                            </div>
                        </div>
                    </form>
                    <div className='acess-container'>
                        <div><Link to='/register' className='acess-texto'>Criar conta</Link></div>
                        <div><Link to='/forgotpassword' className='acess-texto'>Esqueceu a Senha</Link></div>
                    </div>
                </div>
            </div>
            <img src={imagem} alt="" className='imagem'/>
        </div>
    );
}

export default Login;


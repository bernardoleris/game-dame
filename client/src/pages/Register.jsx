import React, { useState } from 'react';
import imagem from '../assets/register-img.png';
import Input from '../components/Input';
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import '../styles/AcessPages.css';
import api from "../services/api";

function Register() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [cpf, setCpf] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const validateEmail = (email) => {
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return emailPattern.test(email);
    };

    const validateCPF = (cpf) => {
        const cpfPattern = /^\d{11}$/;
        return cpfPattern.test(cpf);
    };

    const validatePassword = (password) => {
        return password.length >= 6;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateEmail(email)) {
            alert('Por favor, insira um email válido.');
            return;
        }

        if (!validateCPF(cpf)) {
            alert('Por favor, insira um CPF válido (11 dígitos).');
            return;
        }

        if (!validatePassword(password)) {
            alert('A senha deve ter no mínimo 6 caracteres.');
            return;
        }

        if (password !== confirmPassword) {
            alert('As senhas não coincidem.');
            return;
        }

        try {
            await api.post('/register', {
                username,
                email,
                cpf,
                password
            });

            window.location.href = '/';
        } catch (error) {
            console.error('Erro ao registrar o usuário:', error);
            alert('Erro ao registrar o usuário. Verifique o console para mais detalhes.');
        }
    };

    return (
        <div className='acess-pages'>
            <div className='form-pages'>
                <div className='all-pages'>
                    <form onSubmit={handleSubmit}>
                        <div className='other-pages'>
                            <div className='input-pages'>
                                <div className='form-texto'>Registrar</div>
                                <Input 
                                    placeholder="Nome de usuário" 
                                    value={username} 
                                    onChange={(e) => setUsername(e.target.value)} 
                                />
                                <Input 
                                    placeholder="E-mail" 
                                    value={email} 
                                    onChange={(e) => setEmail(e.target.value)} 
                                />
                                <Input 
                                    placeholder="CPF" 
                                    value={cpf} 
                                    onChange={(e) => setCpf(e.target.value)} 
                                />
                                <Input 
                                    placeholder="Senha" 
                                    type="password" 
                                    value={password} 
                                    onChange={(e) => setPassword(e.target.value)} 
                                />
                                <Input 
                                    placeholder="Confirmar Senha" 
                                    type="password" 
                                    value={confirmPassword} 
                                    onChange={(e) => setConfirmPassword(e.target.value)} 
                                />
                            </div>
                            <div className='arrow-container'>
                                <button type="submit" className='arrow-button'><FaArrowRightLong className='arrow' /></button>
                            </div>
                        </div>
                    </form>
                    <div className='acess-container'>
                        <div><Link to='/' className='acess-texto'>Fazer Login</Link></div>
                    </div>
                </div>
            </div>
            <img src={imagem} alt="" className='imagem' />
        </div>
    );
}

export default Register;

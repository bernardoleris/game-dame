import React, { useState } from 'react';
import imagem from '../assets/register-img.png';
import Input from '../components/Input';
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import '../styles/AcessPages.css';
import api from "../services/api";

function Register() {
    // Defina estados para armazenar os valores dos campos do formulário
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [cpf, setCpf] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    // Função para lidar com o envio do formulário
    const handleSubmit = async (e) => {
        e.preventDefault(); // Previne o comportamento padrão de recarregar a página

        // Verifica se as senhas coincidem
        if (password !== confirmPassword) {
            alert('As senhas não coincidem');
            return;
        }

        try {
            // Envia os dados do usuário para o servidor
            await api.post('/register', {
                username,
                email,
                cpf,
                password
            });

            // Exibe uma mensagem de sucesso
            alert('Usuário registrado com sucesso!');
        } catch (error) {
            // Exibe uma mensagem de erro caso ocorra algum problema
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
                                {/* Use os estados e funções de atualização para os valores dos campos */}
                                <Input placeholder="Nome de usuário" value={username} onChange={(e) => setUsername(e.target.value)} />
                                <Input placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)} />
                                <Input placeholder="CPF" value={cpf} onChange={(e) => setCpf(e.target.value)} />
                                <Input placeholder="Senha" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                                <Input placeholder="Confirmar Senha" type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                            </div>
                            <div className='arrow-container'>
                                <button type="submit"><FaArrowRightLong className='arrow' /></button> {/* Alterado para um botão de envio */}
                            </div>
                        </div>
                        <div className='acess-container'>
                            <div><Link to='/' className='acess-texto'>Fazer Login</Link></div>
                        </div>
                    </form>
                </div>
            </div>
            <img src={imagem} alt="" className='imagem' />
        </div>
    )
}

export default Register;


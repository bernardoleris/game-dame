import React from 'react';
import './Register.css';
import imagem from '../../assets/register-img.png'

function Register(){
    return (
        <div className='register-page'>
            <div className='form-page'>
            </div>
            <div className='register-img'>
                <img src={imagem} alt="" className='imagem'/>
            </div>
        </div>
    )
}

export default Register;

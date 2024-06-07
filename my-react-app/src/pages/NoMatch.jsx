import styled from 'styled-components';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-family: Montserrat, sans-serif;
  font-style: normal;
  color: #4B626C;
  font-size: 50px;
  width: 100%;
  height: 100vh;
`;

const BackButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #4B626C;
  color: #FFF;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-family: Montserrat, sans-serif;
  font-size: 18px;
`;

function NoMatch(){
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1);
    };
    return (
        <NotFound>
            /* Página não encontrada */
            <BackButton onClick={handleGoBack}>Voltar</BackButton>
        </NotFound>
    )
}

export default NoMatch;

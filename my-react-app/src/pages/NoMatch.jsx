import styled from 'styled-components';
import React from 'react';

const NotFound = styled.div`
  display: flex;
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

function NoMatch(){
    return (
        <NotFound>
            /* Página não encontrada */
        </NotFound>
    )
}

export default NoMatch;

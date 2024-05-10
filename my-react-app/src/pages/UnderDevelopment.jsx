import styled from 'styled-components';
import React from 'react';

const UDevelopment = styled.div`
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

function UnderDevelopment(){
    return (
        <UDevelopment>
            /* Página em desenvolvimento... */
        </UDevelopment>
    )
}

export default UnderDevelopment;
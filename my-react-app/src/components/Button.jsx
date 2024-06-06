import React from "react";
import styled, { StyleSheetManager } from "styled-components";
import isPropValid from '@emotion/is-prop-valid';

const StyledButton = styled.button`
    font-family: Montserrat, sans-serif;
    font-style: normal;
    display: flex;
    justify-content: center;
    align-items: center;
    width: ${props => props.variant === 'payment' ? '220px' : '270px'};
    height: 45px;
    background: #4B626C;
    border-radius: 10px;
    color: #FBF6F0;
    font-size: ${props => props.variant === 'payment' ? '20px' : '30px'};
    text-decoration: none;
    border: none;
    cursor: pointer;
    gap: 10px;
    margin-top: ${props => props.variant === 'payment' ? '60px' : '0px'};
    transition: transform 0.3s ease; /* Adiciona a transição suave */
    
    &:hover {
        transform: scale(1.1); /* Aumenta o tamanho do botão em 10% */
    }
`;

const StyledIcon = styled.span`
    margin-top: ${props => props.variant === 'payment' ? '0px' : '20px'};
    width: 20px;
    height: 20px;
`;

function Button(props) {
    return (
        <StyleSheetManager shouldForwardProp={prop => isPropValid(prop)}>
            <StyledButton variant={props.variant}>
                {props.text}
                {props.icon ? (
                    <StyledIcon variant={props.variant}>
                        {props.icon}
                    </StyledIcon>
                ) : null}
            </StyledButton>
        </StyleSheetManager>
    );
}

export default Button;





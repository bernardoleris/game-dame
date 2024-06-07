import React from "react";
import styled, { StyleSheetManager } from "styled-components";
import isPropValid from '@emotion/is-prop-valid';

const StyledButton = styled.button`
    font-family: Montserrat, sans-serif;
    font-style: normal;
    display: flex;
    justify-content: center;
    align-items: center;
    width: ${props => props.width || '270px'};
    height: ${props => props.height || '45px'};
    background: ${props => props.bgColor || '#4B626C'};
    border-radius: 10px;
    color: ${props => props.textColor || '#FBF6F0'};
    font-size: ${props => props.fontSize || '30px'}; /* Adiciona a prop para o tamanho da fonte */
    font-weight: ${props => props.fontWeight || 'normal'}; /* Adiciona a prop para o peso da fonte */
    text-decoration: none;
    border: none;
    cursor: pointer;
    gap: 10px;
    margin-top: ${props => props.marginTop || '0px'}; /* Usa a prop para o margin-top */
    transition: transform 0.3s ease;
    
    &:hover {
        transform: scale(1.1);
    }
`;

const StyledIcon = styled.span`
    margin-top: ${props => props.iconMarginTop || '20px'};
    width: 20px;
    height: 20px;
    margin-right: ${props => props.iconMarginRight || '0px'};
`;

function Button(props) {
    return (
        <StyleSheetManager shouldForwardProp={prop => isPropValid(prop)}>
            <StyledButton 
                bgColor={props.bgColor} 
                textColor={props.textColor} 
                width={props.width}
                height={props.height}
                fontSize={props.fontSize} /* Passa a prop para o tamanho da fonte */
                fontWeight={props.fontWeight} /* Passa a prop para o peso da fonte */
                marginTop={props.marginTop} /* Passa a prop para o margin-top */
            >
                {props.text}
                {props.icon ? (
                    <StyledIcon iconMarginTop={props.iconMarginTop} iconMarginRight={props.iconMarginRight}>
                        {props.icon}
                    </StyledIcon>
                ) : null}
            </StyledButton>
        </StyleSheetManager>
    );
}

export default Button;


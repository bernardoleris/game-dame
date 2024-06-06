import React from "react";
import styled, { StyleSheetManager } from "styled-components";
import isPropValid from '@emotion/is-prop-valid';

const StyledInput = styled.input`
    font-family: Montserrat, sans-serif;
    font-style: normal;
    width: ${props => props.width || '390px'};
    height: ${props => props.height || '50px'};
    font-size: 24px;
    border-radius: 5px;
    background-color: ${props => props.backgroundColor || '#EFEFEF'};
    color: ${props => props.color || '#97A4A2'};
    font-weight: 300;
    text-align: ${props => props.align || 'left'}; // Usando align ao invés de textAlign

    &::placeholder {
        color: ${props => props.placeholderColor || '#97A4A2'};
    }
`;

function Input(props) {
    return (
        <StyleSheetManager shouldForwardProp={prop => isPropValid(prop)}>
            <StyledInput
                type="text"
                placeholder={props.placeholder}
                width={props.width}
                height={props.height}
                align={props.textAlign} // Usando align ao invés de textAlign
                backgroundColor={props.backgroundColor}
                color={props.color}
                placeholderColor={props.placeholderColor}
            />
        </StyleSheetManager>
    );
}

export default Input;



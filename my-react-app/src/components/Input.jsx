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
    text-align: ${props => props.align || 'left'};

    &::placeholder {
        color: ${props => props.placeholderColor || '#97A4A2'};
    }
`;

function Input({ name, type, value, onChange, placeholder, width, height, textAlign, backgroundColor, color, placeholderColor }) {
    return (
        <StyleSheetManager shouldForwardProp={prop => isPropValid(prop)}>
            <StyledInput
                name={name}
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                width={width}
                height={height}
                align={textAlign}
                backgroundColor={backgroundColor}
                color={color}
                placeholderColor={placeholderColor}
            />
        </StyleSheetManager>
    );
}

export default Input;

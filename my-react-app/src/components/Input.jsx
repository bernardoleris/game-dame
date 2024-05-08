import React from "react";
import styled from "styled-components";

const StyledInput = styled.input`
    font-family: Montserrat, sans-serif;
    font-style: normal;
    width: 390px;
    height: 50px;
    font-size: 24px;
    border-radius: 5px;
    background-color: #EFEFEF;
    color: #97A4A2;
    font-weight: 300;
`;

function Input(props) {
    return (
        <StyledInput
            type="text"
            placeholder={props.placeholder}
        />
    );
}

export default Input;



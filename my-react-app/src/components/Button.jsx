import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
    font-family: Montserrat, sans-serif;
    font-style: normal;
    display: flex;
    justify-content: center;
    align-items: center;
    width: ${props => props.payment === 'payment' ? '220px' : '270px'};
    height: 45px;
    background: #4B626C;
    border-radius: 10px;
    color: #FBF6F0;
    font-size: ${props => props.payment === 'payment' ? '20px' : '30px'};
    text-decoration: none;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s ease;
    gap: 10px;
    margin-top: ${props => props.payment === 'payment' ? '60px' : '0px'};;

    &:hover {
        background-color: #37474F;
    }
`;

const StyledIcon = styled.span`
    margin-top: ${props => props.payment === 'payment' ? '0px' : '20px'};
    width: 20px;
    height: 20px;
`;

function Button(props) {
    return (
        <StyledButton payment={props.payment}>
            {props.text}
            {props.icon ? (
                <StyledIcon payment={props.payment}>
                    {props.icon}
                </StyledIcon>
            ) : null}
        </StyledButton>
    );
}

export default Button;



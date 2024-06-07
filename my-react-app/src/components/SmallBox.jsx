import React from 'react';
import styled from 'styled-components';

const Box = styled.div`
  width: ${props => props.width || '100px'};
  height: ${props => props.height || '100px'};
  color: ${props => props.fontColor || 'black'};
  font-size: ${props => props.fontSize || '16px'};
  background-color: ${props => props.bgColor || 'white'};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
`;

const SmallBox = ({ width, height, fontColor, fontSize, bgColor, children }) => {
  return (
    <Box 
      width={width} 
      height={height} 
      fontColor={fontColor} 
      fontSize={fontSize} 
      bgColor={bgColor}
    >
      {children}
    </Box>
  );
};

export default SmallBox;

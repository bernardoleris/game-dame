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
  position: ${props => props.position || 'relative'};
  margin-top: ${props => props.marginTop || '0px'};
  margin-left: ${props => props.marginLeft || '0px'};
`;

const SmallBox = ({ width, height, fontColor, fontSize, bgColor, position, children, marginTop, marginLeft }) => {
  return (
    <Box 
      width={width} 
      height={height} 
      fontColor={fontColor} 
      fontSize={fontSize} 
      bgColor={bgColor}
      position={position}
      marginTop={marginTop}
      marginLeft={marginLeft}
    >
      {children}
    </Box>
  );
};

export default SmallBox;

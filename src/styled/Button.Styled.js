import React from 'react';
import styled from 'styled-components';

export const GlobalButton = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid transparent;
  font-weight: bold;
  text-align: center;
  white-space: nowrap;
  background: none;
  cursor: pointer;
  
  &:focus{
    outline: 0;
  }
`;

export default GlobalButton;
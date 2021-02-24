import styled from 'styled-components';

export const GlobalButton = styled.button`
  position: relative;
  border: 1px solid transparent;
  font-weight: normal;
  text-align: center;
  white-space: nowrap;
  background: none;
  cursor: pointer;
  
  &:focus{
    outline: 0;
  }
  
  svg{
    width: 25px;
  }
`;

export default GlobalButton;
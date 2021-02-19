import React from 'react';
import styled from 'styled-components';
import {MenuButtonSvg, YoutubeLogo} from "../../svg";
import SearchBox from "../SearchBox/SearchBox";
import Nav from "./Nav";
import GlobalButton from "../../../styled/Button.Styled";

const Header = () => {

    return (
        <Container>
            <div>
                <MenuButton>
                    <MenuButtonSvg/>
                </MenuButton>
                <Logo>
                    <YoutubeLogo/>
                </Logo>
            </div>
            <SearchBox/>
            <Nav/>
        </Container>
    )
}

const Container = styled.div`
  height: 60px;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #fff;
  
  div{
    display: flex;
    align-items: center;
  }
`;

const Logo = styled.div`
  cursor: pointer;

  svg {
    width: 85px;
  }
`;

const MenuButton = styled(GlobalButton)`
  margin-right: 20px;

  svg {
    width: 24px;
    fill: #666;
  }
`;


export default Header;
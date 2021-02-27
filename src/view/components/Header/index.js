import React from 'react';
import styled from 'styled-components';
import {MenuButtonSvg, YoutubeLogo} from "../../svg";
import SearchBox from "../SearchBox/SearchBox";
import Nav from "./Nav";
import GlobalButton from "../../../styled/Button.Styled";
import {useHistory} from "react-router";

const Header = ({handleSidebar}) => {

    const history = useHistory();

    const navigate = (url) => {
        history.push(url)
    }

    return (
        <Container>
            <div>
                <MenuButton onClick={handleSidebar}>
                    <MenuButtonSvg/>
                </MenuButton>
                <Logo onClick={() => navigate('/')}>
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
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: rgba(255, 255, 255, 0.98);

  div {
    display: flex;
    align-items: center;
  }
`;

const MenuButton = styled(GlobalButton)`
`;

const Logo = styled.div`
  cursor: pointer;
  padding-left: 30px;

  svg {
    width: 85px;
  }
`;


export default Header;
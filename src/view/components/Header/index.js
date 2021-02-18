import React from 'react';
import styled from 'styled-components';
import {YoutubeLogo} from "../../svg";
import SearchBox from "../SearchBox/SearchBox";
import Nav from "./Nav";

const Header = () => {

    return(
        <Container>
            <Logo>
                <YoutubeLogo/>
            </Logo>
            <SearchBox/>
            <Nav/>
        </Container>
    )
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  height: 60px;
`;

const Logo = styled.div`
  cursor: pointer;
    svg{
      width: 85px;
    }
`;

export default Header;
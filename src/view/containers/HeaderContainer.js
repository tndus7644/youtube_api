import React from 'react';
import styled from 'styled-components';
import Header from "../components/Header";

const HeaderContainer = () => {

    return (
        <Container className={"HeaderContainer"}>
            <Header/>
        </Container>
    )
}

const Container = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 100;
`;

export default HeaderContainer;
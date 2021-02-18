import React from 'react';
import styled from 'styled-components';
import Routes from "./routes/Routes";
import HeaderContainer from "./containers/HeaderContainer";
import {GlobalStyle} from "../styled/Reset.Styled";

const App = () => {

    return(
        <Container>
            <GlobalStyle/>
            <HeaderContainer/>
            <Routes/>
        </Container>
    )
}

const Container = styled.div`

`;

export default App;
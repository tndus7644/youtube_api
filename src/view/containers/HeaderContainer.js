import React,{useState} from 'react';
import styled from 'styled-components';
import Header from "../components/Header";
import {useSelector} from "react-redux";
import {appActions} from "../../redux/ActionCreators";

const HeaderContainer = () => {

    const {sidebar} = useSelector(state => state.app);

    const handleSidebar = () => {
        appActions.updateState({
            sidebar:!sidebar
        })
    }

    console.log("sidebar", sidebar)

    return (
        <Container className={"HeaderContainer"}>
            <Header handleSidebar={handleSidebar}/>
        </Container>
    )
}

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 300;
  height: 60px;
  width: 100%;
`;

export default HeaderContainer;
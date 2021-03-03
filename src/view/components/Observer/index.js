import React, {useRef, useState, useCallback} from 'react';
import styled from 'styled-components';
import {useSelector} from "react-redux";
import Sidebar from "../Sidebar/Sidebar";
import VideoList from "../VideoList/VideoList";
import {ContentContainer} from "../../../styled/Layout.Styled";

const Observer = (props) => {

    const {
        children,
        isLoading,
        hasMore,
        initilized,
        onEnter = () => {}
    } = props

    const observer = useRef();

    const sentinelRef = useCallback((node) => {
        if (isLoading || !hasMore) return;
        if (observer.current) observer.current.disconnect();
        observer.current = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    console.log("inView")
                    onEnter();
                }
            })
        })

        if (node) observer.current.observe(node);
    },  [isLoading, hasMore])

    return (
        <Container className={"Observer"}>
            {children}
            {
                initilized && !isLoading &&
                <Sentinel ref={sentinelRef}/>

            }
        </Container>
    )
}

const Container = styled(ContentContainer)`

`;

const Sentinel = styled.div`
  position: absolute;
  left: 0;
  right: 0; 
  bottom: 100px;
  height: 50px;
  background: #000;
`;


export default Observer;
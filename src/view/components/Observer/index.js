import React, {useRef, useCallback} from 'react';
import styled from 'styled-components';
import {ContentContainer} from "../../../styled/Layout.Styled";

const Observer = (props) => {

    const {
        children,
        isLoading,
        hasMore,
        initilized,
        onEnter
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
    },  [isLoading, hasMore, onEnter])

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
  background: rgba(0,0,0,0);
`;


export default Observer;
import React from 'react';
import styled from 'styled-components';
import VideoDetailContainer from "../containers/VideoDetail/VideoDetailContainer";

const Video = ({match}) => {

    return(
        <Container>
            <VideoDetailContainer match={match}/>
        </Container>
    )
}

const Container = styled.div`

`;

export default Video;
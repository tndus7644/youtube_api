import React from 'react';
import styled from 'styled-components';
import VideoContainer from "../containers/VideoContainer";

const Video = ({match}) => {

    return(
        <Container>
            <VideoContainer match={match}/>
        </Container>
    )
}

const Container = styled.div`

`;

export default Video;
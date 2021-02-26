import React from 'react';
import styled from 'styled-components';
import VideoContainer from "../containers/VideoDetail/VideoContainer";
import CommentsContainer from "../containers/VideoDetail/CommentsContainer";

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
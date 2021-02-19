import React from 'react';
import styled from 'styled-components';
import VideoContent from "./VideoContent";

const VideoList = ({video}) => {

    return (
        <Container>
            {video.map((item, index) =>
                <VideoContent key={index} {...item}/>
                )}
        </Container>
    )
}

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 20px 20px 20px 100px;
`;



export default VideoList;
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
  justify-content: center;
  flex-wrap: wrap;
  margin: 24px auto;
`;



export default VideoList;
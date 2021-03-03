import React from 'react';
import styled from 'styled-components';
import VideoContent from "./VideoContent";
import cn from 'classnames'

const VideoList = (props) => {

    const {
        video,
        shape
    } = props

    return (
        <Container className={cn(shape)}>
            {video.map((item, index) =>
                <VideoContent key={index} {...item} shape={shape}/>
            )}
        </Container>
    )
}

const Container = styled.div`
  padding-top: 80px;

  &.home {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }

  &.search {
    margin: 0 auto;
  }
`;


export default VideoList;
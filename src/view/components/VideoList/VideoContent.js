import React from 'react';
import styled from 'styled-components';
import YouTube from "react-youtube";

const VideoContent = (props) => {

    const {
        snippet,
        id
    } = props

    const VideoSrc = `https://www.youtube.com/embed/${id}`

    return (
        <Container>
            <Video>
                <iframe src={VideoSrc}/>
            </Video>
            <Info>
                <Des>
                    <h3>{snippet?.title}</h3>
                    <p>{snippet?.channelTitle}</p>
                </Des>
            </Info>
        </Container>
    )
}

const Container = styled.div`
  margin: 0 10px 10px;
`;

const Video = styled.div`

`;

const Info = styled.div`
  width: 308px;
  height: 95px;
  padding-top: 10px;
`;

const Des = styled.div`

  h3 {
    line-height: 1.3;
    font-weight: 600;
  }

  p {
    font-size: 14px;
    color: #666;
    line-height: 1.8;
  }
`;

export default VideoContent;
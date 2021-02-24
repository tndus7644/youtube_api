import React from 'react';
import styled from 'styled-components';
import RelatedVideo from "../RelatedVideo/RelatedVideo";

const VideoDetail = (props) => {

    const {
        id,
        info
    } = props

    const videoSrc = `https://www.youtube.com/embed/${id}`

    console.log("info", info)

    return (
        <Container>
            <Video>
                <iframe src={videoSrc}/>
                <Related>
                    <RelatedVideo/>
                </Related>
            </Video>
            <h1>{info?.snippet?.title}</h1>
        </Container>
    )
}

const Container = styled.div`
  max-width: 1300px;
  margin: 0 auto;

  h1{
    line-height: 2;
    font-size: 20px;
    font-weight: 500;
  }
`;

const Video = styled.div`
  display: flex;

  iframe {
    width: 1150px;
    height: 647px;
  }
`;

const Related = styled.div`

`;


export default VideoDetail;
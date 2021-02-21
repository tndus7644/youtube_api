import React from 'react';
import styled from 'styled-components';

const SearchVideoContent = (props) => {

    const {
        snippet,
        id
    } = props

    const VideoSrc = `https://www.youtube.com/embed/${id?.videoId}`


    return (
        <Container>
            <Video>
                <iframe src={VideoSrc}/>
            </Video>
            <Info>
                <h1>{snippet?.title}</h1>
                <p>{snippet?.description}</p>
            </Info>
        </Container>
    )
}

const Container = styled.div`
  display: flex;
  margin: 18px 0;

`;

const Video = styled.div`
  margin-right: 20px;
  
  iframe {
    min-width: 360px;
    height: 202px;
  }
`;

const Info = styled.div`
  h1 {
    font-size: 18px;
    font-weight: 600;
    line-height: 1.6;
  }

  p {
    padding-top: 30px;
    font-size: 13px;
    color: #666;
  }
`;

export default SearchVideoContent;
import React from 'react';
import styled from 'styled-components';

const RelatedVideo = (props) => {

    const {
        id,
        snippet
    } = props

    return (
        <Container>
            <Video>
                <img src={snippet?.thumbnails?.medium?.url} alt=""/>
            </Video>
            <Info>
                <h3>{snippet?.title}</h3>
            </Info>
        </Container>
    )
}

const Container = styled.div`
  margin-bottom: 10px;
  display: flex;
  cursor: pointer;
  min-width: 400px;
`;

const Video = styled.div`
  margin-left: 20px;

  img {
    max-width: 168px;
  }
`;

const Info = styled.div`
  padding-left: 5px;

  h3 {
    font-size: 13px;
    font-weight: 600;
    line-height: 1.6;
  }
`;

export default RelatedVideo;
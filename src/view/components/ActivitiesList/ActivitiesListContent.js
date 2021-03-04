import React from 'react';
import styled from 'styled-components';
import {useHistory} from "react-router";

const ActivitiesListContent = (props) => {

    const {
        snippet,
        contentDetails
    } = props

    const history = useHistory();

    const navigate = () => {
        history.push(`/videos/${contentDetails?.upload?.videoId}`)
    }

    return (
        <Container>
            <Content onClick={navigate}>
                <img src={snippet?.thumbnails?.medium?.url} alt=""/>
                <Title>
                    <h3>{snippet?.title}</h3>
                    <p>{snippet?.channelTitle}</p>
                    <p>조회수 1만 &#183; 1개월</p>
                </Title>
            </Content>
        </Container>
    )
}

const Container = styled.div`
`;

const Content = styled.div`
  display: flex;
  margin-bottom: 10px;
  cursor: pointer;

  img {
    max-width: 168px;
    width: 100%;
    height: 100%;
  }
`;

const Title = styled.div`
  padding-left: 10px;
  line-height: 1.5;

  h3 {
    font-size: 14px;
    font-weight: 600;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  p {
    font-size: 14px;
    color: #666;
  }
`;

export default ActivitiesListContent;
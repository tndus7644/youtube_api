import React from 'react';
import styled from 'styled-components';
import cn from 'classnames';
import {useHistory} from "react-router";

const TrendingVideoContent = (props) => {

    const {
        snippet,
        id,
        shape
    } = props

    const history = useHistory();

    const navigate = (url) => {
        history.push(url)
    }

    const videoId = id?.videoId

    const videoSrc = () => {
        if (id.videoId) {
            navigate(`/videos/${videoId}`)
        } else {
            navigate(`/videos/${id}`)
        }
    }

    return (
        <Container className={cn(shape)} onClick={videoSrc}>
            <Thumb>
                <img src={snippet?.thumbnails?.medium?.url} alt=""/>
            </Thumb>
            <Info>
                <h3>{snippet?.title}</h3>
                <p>{snippet?.channelTitle}</p>
                <span>{snippet?.description}</span>
            </Info>
        </Container>
    )
}

const Container = styled.div`
  cursor: pointer;
  display: flex;
  margin-bottom: 15px;
`;

const Thumb = styled.div`

  img {
    max-width: 246px;
  }

`;

const Info = styled.div`
  width: 550px;
  padding-left: 10px;
  cursor: pointer;

  h3 {
    line-height: 1.3;
    font-weight: 400;
    font-size: 17px;
  }

  p {
    font-size: 14px;
    color: #666;
    line-height: 1.8;
  }
  
  span{
    display: block;
    font-size: 13px;
    color: #666;
    line-height: 1.4;
    overflow : hidden;
    text-overflow : ellipsis;
    white-space : nowrap;
  }
`;


export default TrendingVideoContent;
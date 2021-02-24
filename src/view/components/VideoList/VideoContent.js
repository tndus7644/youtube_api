import React from 'react';
import styled from 'styled-components';
import cn from 'classnames';
import {useHistory} from "react-router";

const VideoContent = (props) => {

    const {
        snippet,
        id,
        shape
    } = props

    const history = useHistory()

    const navigate = (url) => {
        history.push(url)
    }

    const videoId = id?.videoId

    const videoSrc = () => {
        if(id.videoId){
            navigate(`/videos/${videoId}`)
        }else{
            navigate(`videos/${id}`)
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
            </Info>
        </Container>
    )
}

const Container = styled.div`
  margin: 0 7px;
  cursor: pointer;

  &.home {
    display: block;
  }

  &.search {
    display: flex;
    margin-bottom: 20px;
  }

`;

const Thumb = styled.div`

  img {
    width: 347px;
    height: 194px;
  }

`;

const Info = styled.div`
  width: 308px;
  height: 110px;
  padding-top: 10px;

  .search & {
    width: 500px;
    padding-left: 20px;
  }

  h3 {
    line-height: 1.3;
    font-weight: 600;
    cursor: pointer;
  }

  p {
    font-size: 14px;
    color: #666;
    line-height: 1.8;
    cursor: pointer;
  }
`;


export default VideoContent;
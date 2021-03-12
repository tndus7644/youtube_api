import React from 'react';
import styled from 'styled-components';
import cn from 'classnames';
import {useHistory} from "react-router";
import {setSubscriberCount} from "../../../lib/common";

const VideoContent = (props) => {

    const {
        snippet,
        statistics,
        id,
        shape
    } = props

    const history = useHistory();

    const navigate = (url) => {
        history.push(url)
    }

    const videoId = id?.videoId

    const videoSrc = () => {
        if(id.videoId){
            navigate(`/videos/${videoId}`)
        }else{
            navigate(`/videos/${id}`)
        }
    }

    const viewCount = statistics?.viewCount

    return (
        <Container className={cn(shape)} onClick={videoSrc}>
            <Thumb>
                <img src={snippet?.thumbnails?.medium?.url} alt=""/>
            </Thumb>
            <Info>
                <h3>{snippet?.title}</h3>
                <p>조회수 {setSubscriberCount(viewCount)}&#183; 1일전</p>
                <p><img src={snippet?.thumbnails?.default?.url} alt=""/>{snippet?.channelTitle}</p>
                <span className={cn(shape)}>{snippet?.description}</span>
            </Info>
        </Container>
    )
}

const Container = styled.div`
  margin: 0 7px 30px;
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
    min-width: 347px;
    min-height: 194px;
  }

`;

const Info = styled.div`
  width: 308px;
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
    color: #555;
    cursor: pointer;
    display: flex;
    align-items: center;
    margin: 8px 0;
    
    img{
      width: 30px;
      height: 30px;
      border-radius: 50%;
      margin-right: 8px;
    }
  }
  
  span{
    font-size: 13px;
    color: #666;
  }
  
  span.home{
    display: none;
  }

`;


export default VideoContent;
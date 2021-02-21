import React,{useEffect} from 'react';
import styled from 'styled-components';
import {channelActions} from "../../../redux/ActionCreators";

const VideoContent = (props) => {

    const {
        snippet,
        id
    } = props

    const VideoSrc = `https://www.youtube.com/embed/${id}`

    const channelId = snippet.channelId

    const channel = () => {
        channelActions.channelList({
            id: channelId,
            maxResults:15
        })
    }

    useEffect(() => {
        channel();
    },[])

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
  margin: 0 7px;
`;

const Video = styled.div`
  iframe{
    width: 347px;
    height: 194px;
  }
`;

const Info = styled.div`
  width: 308px;
  height: 110px;
  padding-top: 10px;
`;

const Des = styled.div`

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
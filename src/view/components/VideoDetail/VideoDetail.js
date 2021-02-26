import React from 'react';
import styled from 'styled-components';
import {DotMenuRowSvg, HateSvg, LikesSvg, SaveSvg, SharingSvg} from "../../svg";
import GlobalButton from "../../../styled/Button.Styled";
import ChannelNav from "../Channel/Channel";
import CommentsContainer from "../../containers/VideoDetail/CommentsContainer";

const VideoDetail = (props) => {

    const {
        id,
        statistics,
        snippet,
        channel
    } = props

    const videoSrc = `https://www.youtube.com/embed/${id}`

    console.log("channel", channel)

    return (
        <Container>
            <VideoContent>
                <iframe src={videoSrc}/>
                <VideoInfo>
                    <div>
                        <h1>{snippet?.title}</h1>
                        <p>
                            <span>조회수</span>
                            <span>{statistics?.viewCount}회</span>
                            <span>&#183;</span>
                            <span>{snippet?.publishedAt}</span>
                        </p>
                    </div>
                    <ButtonGroup>
                        <Button><LikesSvg/><p>{statistics?.likeCount}</p></Button>
                        <Button><HateSvg/><p>{statistics?.dislikeCount}</p></Button>
                        <Button><SharingSvg/><p>공유</p></Button>
                        <Button><SaveSvg/><p>저장</p></Button>
                        <Button><DotMenuRowSvg/></Button>
                    </ButtonGroup>
                </VideoInfo>
                <ChannelNav channel={channel} snippet={snippet}/>
            </VideoContent>
            <CommentsContainer id={id}/>
        </Container>
    )
}

const Container = styled.div`
  padding-top: 80px;
  margin: 0 auto;

`;

const VideoContent = styled.div`
  iframe {
    width: 1150px;
    height: 647px;
  }

`;

const VideoInfo = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;

  h1 {
    padding-top: 15px;
    line-height: 1.6;
    font-size: 20px;
    font-weight: 500;
  }

  p {
    font-size: 15px;
    color: #666;
    line-height: 1.6;

    span {
      display: inline-block;
      padding-right: 3px;
    }
  }

`;

const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
`;

const Button = styled(GlobalButton)`
  display: flex;
  padding: 0 10px;

  p {
    padding-left: 5px;
  }
`;


export default VideoDetail;
import React from 'react';
import styled from 'styled-components';
import {DotMenuRowSvg, HateSvg, LikesSvg, SaveSvg, SharingSvg} from "../../svg";
import GlobalButton from "../../../styled/Button.Styled";
import ChannelNav from "../Channel/VideoDetailChannel";
import {thousandNumberFormat} from "../../../lib/common";
import CommentsList from "../Comments/CommentsList";

const VideoDetail = (props) => {

    const {
        id,
        statistics,
        comments,
        snippet,
        channel
    } = props

    const videoSrc = `https://www.youtube.com/embed/${id}`

    return (
        <Container>
            <VideoContent>
                <iframe title={id} src={videoSrc}/>
                <VideoInfo>
                    <div>
                        <h1>{snippet?.title}</h1>
                        <p>
                            <span>조회수</span>
                            <span>{thousandNumberFormat(statistics?.viewCount)}회</span>
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
            <CommentsList statistics={statistics} comments={comments}/>
        </Container>
    )
}

const Container = styled.div`
  max-width: 1150px;
`;

const VideoContent = styled.div`
  border-bottom: 1px solid #ddd;
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
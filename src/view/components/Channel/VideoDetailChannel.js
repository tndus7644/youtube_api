import React, {useState} from 'react';
import styled from 'styled-components';
import GlobalButton from "../../../styled/Button.Styled";
import cn from 'classnames';
import {setSubscriberCount} from "../../../lib/common";

const VideoDetailChannel = (props) => {

    const {
        snippet,
        channel
    } = props

    const [more, setMore] = useState(false);

    const handleClick = () => {
        setMore(!more)
    }

    const subscriberCount = channel?.statistics?.subscriberCount;

    return (
        <Container>
            <ChannelContent>
                <img className={"ChannelThumb"} src={channel?.snippet?.thumbnails?.default?.url} alt=""/>
                <ChannelInfo>
                    <h3>{channel?.snippet?.localized?.title}</h3>
                    <p><span>구독자</span>{setSubscriberCount(subscriberCount)}명</p>
                </ChannelInfo>
            </ChannelContent>
            <SubTitle>
                <p className={cn({more})}>
                    {snippet?.description}
                </p>
                <Button onClick={handleClick}>{more ? "간략히" : "더보기"}</Button>
            </SubTitle>
        </Container>
    )
}

const Container = styled.div`
  margin: 10px 0;
  border-top: 1px solid #ddd;

  img.ChannelThumb {
    max-width: 48px;
    border-radius: 50%;
  }
`;

const ChannelContent = styled.div`
  padding: 15px 0;
  display: flex;
  align-items: center;
`;

const ChannelInfo = styled.div`
  padding-left: 15px;
  
  h3 {
    font-weight: 600;
  }

  p {
    color: #666;
    font-size: 13px;
    line-height: 1.3;

    span {
      display: inline-block;
      padding-right: 3px;
    }
  }
`;

const SubTitle = styled.div`
  p {
    font-size: 14px;
    max-width: 700px;
    line-height: 1.4;
    overflow: hidden;
    height: 58px;
    white-space: pre-wrap;   

    &.more {
      height: auto;
    }
  }
`;

const Button = styled(GlobalButton)`
  padding-top: 10px;
  color: #666;
`;

export default VideoDetailChannel;
import React from 'react';
import styled from 'styled-components';
import {channelActions} from "../../../redux/ActionCreators";
import {useSelector} from "react-redux";

const Channel = ({channel}) => {

    return (
        <Container>
            <ChannelContent>
                <img src={channel?.snippet?.thumbnails?.default?.url} alt=""/>
                <ChannelInfo>
                    <h3>{channel?.snippet?.localized?.title}</h3>
                    <p><span>구독자</span>{channel?.statistics?.subscriberCount}</p>
                </ChannelInfo>
                <Desc>
                    
                </Desc>
            </ChannelContent>
        </Container>
    )
}

const Container = styled.div`
  margin: 10px 0;
  border-top: 1px solid #ddd;

  img {
    max-width: 48px;
    border-radius: 50%;
  }
`;

const ChannelContent = styled.div`
  padding-top: 15px;
  display: flex;
  align-items: center;
`;

const ChannelInfo = styled.div`
  padding-left: 15px;
  
  h3{
    font-weight: 600;
  }
  p{
    color: #666;
    font-size: 13px;
    line-height: 1.3;
    
    span{
      display: inline-block;
      padding-right: 3px;
    }
  }
`;

const Desc = styled.div`
    
`;

export default Channel;
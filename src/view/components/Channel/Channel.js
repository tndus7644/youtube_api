import React,{useState} from 'react';
import styled from 'styled-components';
import GlobalButton from "../../../styled/Button.Styled";
import cn from 'classnames';

const ChannelNav = (props) => {

    const {
        snippet,
        channel
    } = props

    const [desc, setDesc] = useState(false);

    const handleClick = () => {
        setDesc(!desc)
    }

    return (
        <Container>
            <ChannelContent>
                <img src={channel?.snippet?.thumbnails?.default?.url} alt=""/>
                <ChannelInfo>
                    <h3>{channel?.snippet?.localized?.title}</h3>
                    <p><span>구독자</span>{channel?.statistics?.subscriberCount}</p>
                </ChannelInfo>
            </ChannelContent>
            <Desc>
                <p className={cn({show:desc})}>
                    {snippet?.description}
                </p>
                <Button onClick={handleClick}>더보기</Button>
            </Desc>
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
  display: flex;
  align-items: center;
  padding: 15px 0;
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

const Desc = styled.div`
  p {
    font-size: 14px;
    max-width: 625px;
    line-height: 1.4;
    overflow: hidden;
    
    &.show{
      overflow: visible;
    }
  }
`;

const Button = styled(GlobalButton)`
    padding-top: 10px;
  color: #666;
`;

export default ChannelNav;
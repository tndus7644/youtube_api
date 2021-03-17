import React from 'react';
import styled from 'styled-components';
import {HateSvg, LikesSvg} from "../../svg";
import GlobalButton from "../../../styled/Button.Styled";

const CommentInfo = ({snippet, shape}) => {

    return (
        <Container className={shape}>
            <img src={snippet?.authorProfileImageUrl} alt=""/>
            <Info>
                <h4>{snippet?.authorDisplayName}</h4>
                <p>{snippet?.textOriginal}</p>
                <Reaction>
                    <Button>
                        <LikesSvg/>
                        <p>{snippet?.likeCount}</p>
                    </Button>
                    <Button><HateSvg/></Button>
                </Reaction>
            </Info>
        </Container>
    )
}

const Container = styled.div`
  display: flex;
  align-items: flex-start;
  margin-left: 15px;
  
  &.replies img{
    width: 25px;
    height: 25px;
    border-radius: 50%;
  }
  
  &.top img{
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
`;

const Info = styled.div`
  padding-left: 15px;

  h4 {
    font-size: 13px;
    font-weight: 700;
    line-height: 1.7;
  }

  p {
    font-size: 14px;
    line-height: 1.4;
  }
`;


const Reaction = styled.div`
  display: flex;
`;

const Button = styled(GlobalButton)`
  cursor: pointer;
  margin-right: 13px;
  display: flex;
  align-items: center;
  color: #666;
  p{
    padding-left: 5px;
    font-size: 12px;
  }
  svg {
    width: 15px;
  }
`;

export default CommentInfo;
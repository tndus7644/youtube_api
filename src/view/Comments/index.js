import React from 'react';
import styled from 'styled-components';
import {HateSvg, LikesSvg} from "../svg";
import GlobalButton from "../../styled/Button.Styled";

const Comments = (props) => {

    const {
        snippet
    } = props

    return (
        <Container>
            <img src={snippet?.topLevelComment?.snippet?.authorProfileImageUrl} alt=""/>
            <CommentInfo>
                <h4>{snippet?.topLevelComment?.snippet?.authorDisplayName}</h4>
                <p>{snippet?.topLevelComment?.snippet?.textOriginal}</p>
                <Reaction>
                    <Button><LikesSvg/></Button>
                    <Button><HateSvg/></Button>
                </Reaction>
            </CommentInfo>
        </Container>
    )
}

const Container = styled.div`
  display: flex;
  align-items: flex-start;
  margin: 18px 0;

  img {
    border-radius: 50%;
    width: 40px;
  }
`;

const CommentInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 15px;
  
  h4{
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
`;

const Button = styled(GlobalButton)`
  cursor: pointer;
  margin-right: 13px;

  svg {
    width: 15px;
  }
`;

export default Comments;
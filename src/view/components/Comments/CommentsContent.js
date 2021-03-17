import React, {useState} from 'react';
import styled from 'styled-components';
import RepliesComments from "./RepliesComments";
import CommentInfo from "./CommentInfo";
import GlobalButton from "../../../styled/Button.Styled";
import {RepliesCommentsSvg} from "../../svg";

const CommentsContent = ({snippet, replies}) => {

    const [more, setMore] = useState(false);

    const handleMoreBtn = () => {
        setMore(!more)
    }

    console.log("more", more)

    return (
        <Container>
            <CommentInfo snippet={snippet?.topLevelComment?.snippet} shape={"top"}/>
            {
                replies?.comments?.map((item, index) =>
                    <RepliesComments {...item} key={index} shape={"replies"} more={more}/>)
            }
            <Button className={"handleMoreBtn"} onClick={handleMoreBtn}>
                <RepliesCommentsSvg/>
                <p>답글 {snippet?.totalReplyCount}개 {more ? "숨기기" : "보기"}</p>
            </Button>
        </Container>
    )
}

const Container = styled.div`
  margin: 18px 0;
`;

const Button = styled(GlobalButton)`
  padding: 10px 0 0 70px;
  display: flex;
  align-items: center;

  svg {
    fill: #065fd4;
    opacity: 1;
    width: 20px;
  }

  p {
    color: #065fd4;
    padding-left: 5px;
  }
`;

export default CommentsContent;
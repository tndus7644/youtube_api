import React from 'react';
import styled from 'styled-components';
import CommentsContent from "./CommentsContent";

const CommentsList = ({comments, statistics}) => {

    const count = statistics?.commentCount

    return (
        <Container>
            <h3>댓글{count}개</h3>
            {
                comments?.items?.map((item, index) =>
                    <CommentsContent key={index} {...item}/>)
            }
        </Container>
    )
}

const Container = styled.div`
    padding-top: 35px;
`;

export default CommentsList;
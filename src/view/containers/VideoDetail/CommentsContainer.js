import React from 'react';
import styled from 'styled-components';
import Comments from "../../components/Comments";
import {useSelector} from "react-redux";

const CommentsContainer = ({commentCount}) => {

    const {comments} = useSelector(state => state.comments)

    return (
        <Container className={"CommentsContainer"}>
            <h3>댓글{commentCount}개</h3>
            {
                comments.items.map((item, index) =>
                    <Comments key={index} {...item}/>)
            }
        </Container>
    )
}

const Container = styled.div`
    padding-top: 35px;
`;

export default CommentsContainer;
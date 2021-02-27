import React, {useEffect} from 'react';
import styled from 'styled-components';
import Comments from "../../Comments";
import {commentsActions} from "../../../redux/ActionCreators";
import {useSelector} from "react-redux";

const CommentsContainer = ({id, commentCount}) => {

    const {comments} = useSelector(state => state.comments)

    console.log("comments", comments)

    useEffect(() => {
        getComments();
    }, [])

    const getComments = () => {
        commentsActions.commentsList({
            part: 'snippet',
            videoId: id,
            maxResults:10
        })
    }

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
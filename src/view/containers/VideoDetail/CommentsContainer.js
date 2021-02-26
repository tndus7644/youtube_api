import React,{useEffect} from 'react';
import styled from 'styled-components';
import Comments from "../../Comments";
import {commentsActions} from "../../../redux/ActionCreators";
import {useSelector} from "react-redux";

const CommentsContainer = ({id}) => {

    const {comments} = useSelector(state => state.comments)

    console.log("comments", comments)

    useEffect(() => {
        getComments();
    },[])

    const getComments = () => {
        commentsActions.commentsList({
            part:'snippet',
            videoId:id
        })
    }

    return(
        <Container className={"CommentsContainer"}>
            <Comments/>
        </Container>
    )
}

const Container = styled.div`

`;

export default CommentsContainer;
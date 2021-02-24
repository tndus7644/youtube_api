import React,{useEffect} from 'react';
import styled from 'styled-components';
import VideoDetail from "../components/VideoDetail/VideoDetail";
import {videoActions} from "../../redux/ActionCreators";
import {useSelector} from "react-redux";

const VideoContainer = ({match}) => {

    const id = match.params.id

    const videoById = () => {
        videoActions.getVideo({
            id
        })
    }

    useEffect(() => {
        videoById();
    },[])

    const {video} = useSelector(state => state.video);

    console.log("video", video)

    return (
        <Container>
            <VideoDetail id={id} info={video.items[0]}/>
        </Container>
    )
}

const Container = styled.div`
  background: #f7f7f7;
  padding-top: 80px;
`;

export default VideoContainer;
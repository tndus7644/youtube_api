import React, {useEffect} from 'react';
import styled from 'styled-components';
import {videoActions} from "../../redux/ActionCreators";
import {useSelector} from "react-redux";
import VideoList from "../components/VideoList/VideoList";
import Sidebar from "../components/Sidebar/Sidebar";

const HomeContainer = () => {

    useEffect(() => {
        singleVideo();
    }, [])

    const singleVideo = () => {
        videoActions.getVideo({
            maxResults: 15,
            chart: 'mostPopular'
        })
    }

    const {video} = useSelector(state => state.video);

    console.log("video", video)


    return (
        <Container className={"HomeContainer"}>
            <Sidebar/>
            <VideoList video={video.items}/>
        </Container>
    )
}

const Container = styled.div`
  background: #f9f9f9;
  display: flex;
`;


export default HomeContainer;
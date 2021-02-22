import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {appActions, channelActions, videoActions} from "../../redux/ActionCreators";
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

    const {channel} = useSelector(state => state.channel);
    const channelItem = () => {
        channelActions.channelList({})
    }

    const {sidebar} = useSelector(state => state.app);

    const handleSidebar = () => {
        appActions.updateState({
            sidebar:!sidebar
        })
    }

    console.log("sidebar", sidebar)


    return (
        <Container className={"HomeContainer"}>
            <Sidebar handleSidebar={handleSidebar}/>
            <VideoList video={video.items}/>
        </Container>
    )
}

const Container = styled.div`
  background: #f9f9f9;
  display: flex;
`;



export default HomeContainer;
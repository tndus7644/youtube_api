import React, {useEffect} from 'react';
import styled from 'styled-components';
import {videoActions} from "../../../redux/ActionCreators";
import {useSelector} from "react-redux";
import VideoList from "../../components/VideoList/VideoList";
import Sidebar from "../../components/Sidebar/Sidebar";
import {ContentContainer} from "../../../styled/Layout.Styled";

const HomeContainer = () => {

    useEffect(() => {
        singleVideo();
    }, [])

    const singleVideo = () => {
        videoActions.getVideo({
            maxResults: 15,
            chart: 'mostPopular',
            part:'snippet'
        })
    }

    const {video} = useSelector(state => state.video);

    return (
        <Container className={"HomeContainer"}>
            <Sidebar/>
            <VideoList video={video.items} shape={"home"}/>
        </Container>
    )
}

const Container = styled(ContentContainer)`
`;



export default HomeContainer;
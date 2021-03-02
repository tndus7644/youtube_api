import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {videoActions} from "../../../redux/ActionCreators";
import {useSelector} from "react-redux";
import VideoList from "../../components/VideoList/VideoList";
import Sidebar from "../../components/Sidebar/Sidebar";
import {ContentContainer} from "../../../styled/Layout.Styled";
import Observer from "../../components/Observer";

const HomeContainer = () => {

    const {list, isLoading, hasMore} = useSelector(state => state.video);
    const [page, setPage] = useState(1);

    useEffect(() => {
        getVideos();
    }, [page])

    const getVideos = () => {
        videoActions.getVideos({
            maxResults: 15,
            chart: 'mostPopular',
            part: 'snippet, id, contentDetails, player, statistics',
            regionCode: 'KR',
            pageToken: list?.nextPageToken
        })
    }

    console.log("list", list)

    const onEnter = () => {
        setPage(prevPage => prevPage + 1);
    }

    return (
        <Container className={"HomeContainer"}>
            <Sidebar/>
            <Observer isLoading={isLoading}
                      hasMore={hasMore}
                      initilized={list.items.length > 0}
                      onEnter={onEnter}
            >
                <VideoList video={list.items} shape={"home"}/>
            </Observer>
        </Container>
    )
}

const Container = styled(ContentContainer)`
  position: relative;
`;


export default HomeContainer;